import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Formik } from 'formik'
import * as yup from "yup"
import { AppButton } from '../Components/AppButton'
import { auth } from '../Firebase/Settings';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AppContext } from '../Components/GlobalVariables'
import { getDoc } from 'firebase/firestore'


export function Login({ navigation }) {
    const { userUID, setUserUID, userImg } = useContext(AppContext)

    const validation = yup.object({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    })

    return (
        <SafeAreaView style={styles.contain}>
            <ImageBackground style={{ flex: 1, backgroundColor: "white" }} >
                <View style={styles.bigma}>
                    <View>
                        <Text style={styles.firstdi}>Login</Text>
                    </View>


                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(value) => {
                            signInWithEmailAndPassword(auth, value.email, value.password)
                                .then((data) => {
                                    const { uid } = data.user;
                                    setUserUID(uid);

                                    // console.log("Account Login successfully")
                                    navigation.navigate("HomeScreen")
                                })
                                .catch(e => console.log(e))
                            console.log(value);
                        }}
                        validationSchema={validation}
                    >
                        {(prop) => {
                            return (
                                <View>
                                    <TextInput
                                        placeholder='Enter Email'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("email")}
                                        onBlur={prop.handleBlur("email")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#dbd3bc", marginStart: 20, }}> {prop.errors.email} </Text>

                                    <TextInput
                                        placeholder='Enter Password'
                                        style={styles.textinput}
                                        onChangeText={prop.handleChange("password")}
                                        onBlur={prop.handleBlur("password")}
                                        autoCapitalize='none'
                                    />
                                    <Text style={{ color: "#dbd3bc", marginStart: 20, }}> {prop.errors.password} </Text>

                                    <AppButton onPress={prop.handleSubmit} >Login</AppButton>
                                </View>
                            )
                        }}
                    </Formik>




                    <View style={styles.bighr}>
                        <View style={styles.hr}></View>
                        <Text style={{ color: "goldenrod", fontWeight: "bold" }}> Or Login With</Text>
                        <View style={styles.hr}></View>
                    </View>

                    <View style={styles.bigboda}>
                        <TouchableOpacity style={styles.boda}>
                            <FontAwesomeIcon icon={faGoogle} size={25} style={styles.awesome} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boda}>
                            <FontAwesomeIcon icon={faFacebookF} size={25} style={styles.awesome} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boda}>
                            <FontAwesomeIcon icon={faApple} size={25} style={styles.awesome} />
                        </TouchableOpacity>
                    </View>
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