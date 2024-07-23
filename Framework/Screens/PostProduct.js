import { Alert, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Formik } from 'formik'
import * as yup from "yup"
import { AppButton } from '../Components/AppButton'
import { auth, db } from '../Firebase/Settings';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { AppContext } from '../Components/GlobalVariables'

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmc1jzxo3sMAMctOgQZDEDGwJ4xZkuJ5nB436i2tTwX8yWllJd_dxlmM0WIKlordZrSw&usqp=CAU
export function PostProduct({ navigation }) {
    const { userUID, setUserUID, userImg } = useContext(AppContext)

    const validation = yup.object({
        name: yup.string().min(3).required("First name is required"),
        price: yup.string().min(3).required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must be the same")
    })

    return (
        <SafeAreaView style={styles.contain}>
            <ImageBackground style={{ flex: 1, backgroundColor: "white" }} >
                <View style={styles.bigma}>
                    <View>
                        <Text style={styles.firstdi}>Post a Product</Text>
                    </View>


                    <Formik
                        initialValues={{ name: "", price: "", imageURL: "", details: "", }}
                        onSubmit={(value) => {
                            addDoc(collection(db, "products"), {
                                name: value.name,
                                price: value.price,
                                imageURL: value.imageURL,
                                details: value.details,
                                userUID,
                                dateCreated: new Date().getTime(),
                            }).then(() => {
                                Alert.alert("Post Product", "Product has been posted successfully")
                                navigation.navigate("HomeScreen")
                            }).catch(e => console.log(e))
                            console.log(value);
                        }}
                    // validationSchema={validation}
                    >
                        {(prop) => {
                            return (
                                <View>
                                    <TextInput
                                        placeholder='Enter Product Name'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("name")}
                                        onBlur={prop.handleBlur("name")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#ff1212", marginStart: 10, marginBottom: 20 }}> {prop.errors.name && prop.touched.name} </Text>
                                    <TextInput
                                        placeholder='Enter price'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("price")}
                                        onBlur={prop.handleBlur("price")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#ff1212", marginStart: 10, marginBottom: 20 }}> {prop.errors.price && prop.touched.price} </Text>


                                    <TextInput
                                        placeholder='Enter details'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("details")}
                                        onBlur={prop.handleBlur("details")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#ff1212", marginStart: 10, marginBottom: 20 }}> {prop.errors.details && prop.touched.details} </Text>


                                    <TextInput
                                        placeholder='Enter image URL'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("imageURL")}
                                        onBlur={prop.handleBlur("imageURL")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#ff1212", marginStart: 10, marginBottom: 20 }}> {prop.errors.imageURL && prop.touched.imageURL} </Text>

                                    <AppButton onPress={prop.handleSubmit} >Post now</AppButton>
                                </View>
                            )
                        }}
                    </Formik>

                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    bigma: {
        flex: 1,
        borderWidth: 0,
        margin: 30,
        padding: 1
    },
    firstdi: {
        textAlign: "center",
        marginTop: "10%",
        marginBottom: 30,
        fontSize: 30,
        fontWeight: "900",
        color: "goldenrod"
    },
    textinput: {
        borderWidth: 1,
        borderColor: "goldenrod",
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#dbd3bc",
    },
    bighr: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "4%",
    },
    hr: {
        borderTopWidth: "1%",
        borderTopColor: "goldenrod",
        marginTop: "2%",
        width: "25%",
        color: "goldenrod"
    },
    boda: {
        color: "white",
        borderWidth: "1%",
        borderColor: "#goldenrod",
        backgroundColor: "goldenrod",
        borderRadius: "50",
        padding: "5%",
    },
    bigboda: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center"
    },
    awesome: {
        color: "white",
    },
})