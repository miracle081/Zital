import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { AppButton } from '../Components/AppButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { Theme } from '../Components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

function Home({ navigation }) {
    const [visibility, setVisibility] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, padding: 15 }}>
            <Text style={styles.text}>Home</Text>
            <Text>HomeScreen</Text>
            <AppButton onPress={() => navigation.navigate("Profile")} >Profile</AppButton>
            <AppButton onPress={() => setVisibility(true)} >Modal</AppButton>
            <Modal
                visible={visibility}
                transparent={true}
                animationType="slide"
            >
                <Pressable onPress={() => setVisibility(false)} style={{ flex: 1 }}></Pressable>
                <View style={styles.modal}>
                    <Text>This is a modal</Text>
                    <AppButton onPress={() => setVisibility(false)} >Close Modal</AppButton>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modal: {
        // flex: 1,
        // marginTop: 120, 
        padding: 20,
        backgroundColor: "#b1b1b1",
        height: 500,
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
                    } else if (route.name === 'PostJob') {
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
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}