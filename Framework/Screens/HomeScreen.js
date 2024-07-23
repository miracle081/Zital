import { Dimensions, FlatList, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState, useContext, useEffect } from 'react'
import { AppButton } from '../Components/AppButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { Theme } from '../Components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../Components/GlobalVariables';
import { Formik } from 'formik';
import * as yup from "yup"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Firebase/Settings';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { trendingDeals, carouselItems, theme } from "../Components/Data";
import { HomeScreenShop } from "../Components/HomeScreenShop";
import Carousel from "react-native-reanimated-carousel";
import { FontAwesome } from '@expo/vector-icons';
import { PostProduct } from './PostProduct';


const validation = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must be the same")
})

function Home({ navigation }) {
    const { userUID, setUserInfo, userInfo } = useContext(AppContext)
    const [visibility, setVisibility] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getDoc(doc(db, "users", userUID))
            .then((data) => {
                setUserInfo(data.data());
            }).catch(e => console.log(e));
        getProducts();
    }, [])

    function getProducts() {
        onSnapshot(collection(db, "products"), (data) => {
            // data.forEach((doc) => ({ ...doc.data(), id: doc.id }))
            const rd = []
            data.forEach(e => {
                // console.log(e.data());
                rd.push({ ...e.data(), docID: data.id })
            });
            setProducts(rd)
        })
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const TRENDING_DATA = trendingDeals;

    const CAROUSEL_DATA = carouselItems;

    const { width } = Dimensions.get('window');

    const TrendingItem = (props) => {

        return (
            <View style={{ height: '100%', width: 160, marginRight: 20 }}>
                <View style={styles.discountPercentCon}>
                    <Text style={{ color: 'white', fontFamily: theme.fontName.text600[0] }}>{props.discountPrice}</Text>
                </View>
                <Image source={{ uri: props.imgSource }} style={{ width: '100%', height: '72%', borderRadius: 10, marginBottom: 10 }} />
                <View style={{ flexDirection: 'row', gap: 2 }}>
                    <Text style={[{ fontFamily: theme.fontName.text500[0], position: 'relative', top: 3.8 }, styles.discountPriceText]}>NGN</Text>
                    <Text style={[{ fontFamily: theme.fontName.text600[0], fontSize: 18 }, styles.discountPriceText]}>{props.sellingPrice}</Text>
                </View>
            </View>
        )
    }

    const CarouselItem = ({ carouselImg }) => {
        return (
            <View style={{ flex: 1 }}>
                <Image source={carouselImg} style={{ width: '100%', height: '100%' }} />
            </View>
        )
    }

    function updateProfile() {
        updateDoc(doc(db, "users", userUID), {
            firstname: "",
            address: ''
        })
    };

    function deleteProduct() {
        deleteDoc(doc(db, "products", "docID"))
            .then(() => {
                Alert.alert("Delete Product", "product has been deleted successfully")
            })
            .catch(e => console.log(e))
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingVertical: 17 }}>
                    <View style={styles.carouselTextCon}>
                        <Text style={[{ fontSize: 32 }, styles.carouselText]}>50%</Text>
                        <Text style={[{ fontSize: 27 }, styles.carouselText]}>OFF</Text>
                    </View>
                    <Carousel
                        // loop
                        autoPlay={true}
                        width={width - 20}
                        height={width / 2.5}
                        style={{ alignSelf: 'center', borderRadius: 5 }}
                        data={CAROUSEL_DATA}
                        renderItem={({ item }) => {
                            return <CarouselItem carouselImg={item.source()} />
                        }}
                        autoPlayInterval={5000}
                        scrollAnimationDuration={1500}
                        onSnapToItem={(index) => setActiveIndex(index)}
                    />
                    <View style={styles.carouselIndicators}>
                        {
                            CAROUSEL_DATA.map((item, index) => (
                                <View key={index}>
                                    <FontAwesome name="circle" size={7} color={activeIndex === index ? "white" : "#797676"} />
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', paddingTop: 10, gap: 17 }}>
                    <Text style={{ marginLeft: 10, fontSize: 17, fontFamily: theme.fontName.text600[0] }}>Trending Deals</Text>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => {
                            return <TrendingItem
                                imgSource={item.imageURL}
                                discountPrice={item.discount}
                                sellingPrice={item.cost}
                            />
                        }}
                        horizontal
                        keyExtractor={item => item.id}
                        style={styles.flatlistCon}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <HomeScreenShop />
            </ScrollView>
            <StatusBar style="auto" barStyle={'dark-content'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    bannerImage: {
        height: 180,
        width: '100%',
        shadowColor: 'rgb(52, 51, 51)',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.45,
        shadowRadius: 15,
        elevation: 5
    },
    carouselTextCon: {
        position: 'absolute',
        zIndex: 1,
        top: 30,
        left: 20
    },
    carouselText: {
        color: 'white',
        fontFamily: theme.fontName.text600[0]
    },
    carouselIndicators: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        top: 163,
        alignSelf: 'center',
        gap: 15
    },
    flatlistCon: {
        height: 200,
        paddingLeft: 10,
    },
    discountPercentCon: {
        backgroundColor: theme.colors.primary1,
        width: 45,
        alignItems: 'center',
        padding: 1.5,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        position: 'absolute',
        zIndex: 1
    },
    discountPriceText: {
        color: theme.colors.primary1
    }
});

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'HomePage') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'PostProduct') {
                        iconName = focused ? 'plus' : 'plus-box-outline';
                    }
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: Theme.colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomePage" component={Home} options={{ title: "Home" }} />
            <Tab.Screen name="PostProduct" component={PostProduct} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}