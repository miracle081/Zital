import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Formik } from 'formik'
import * as yup from "yup"

const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must be the same")
})

export function SignUp() {
    let imageSource = require('../../assets/icon.png');

    return (
        <SafeAreaView style={styles.contain}>
            <View style={{ flex: 1, backgroundColor: "#704b00" }}>
                <View style={styles.bigma}>
                    <View>
                        <Text style={styles.firstdi}>Sign Up</Text>
                    </View>

                    <Formik
                        initailValues={{ email: "", password: "", confirmPassword: "" }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    // validationSchema={validationSchema}
                    >

                        {(prop) => {
                            return (
                                <View>
                                    <View style={styles.fere}>
                                        <Text style={{ marginLeft: 15, color: "white", fontWeight: "bold" }}>Email</Text>
                                        <TextInput
                                            style={styles.texting}
                                            placeholder='Enter Mail'
                                            onChangeText={prop.handleChange("email")}
                                        />
                                        {/* <Text style={{ color: "#ffc3c3", marginStart: 30, }}>{prop.errors.email}</Text> */}
                                    </View>

                                    <View style={styles.fere1}>
                                        <Text style={{ marginLeft: 15, color: "white", fontWeight: "bold" }}>Password</Text>
                                        <TextInput
                                            style={styles.texting}
                                            placeholder='Enter Password'
                                            onChangeText={prop.handleChange("password")}
                                        />
                                    </View>

                                    <View style={styles.fere1}>
                                        <Text style={{ marginLeft: 15, color: "white", fontWeight: "bold" }}>Confirm Password</Text>
                                        <TextInput
                                            style={styles.texting}
                                            placeholder='Confirm Password'
                                            onChangeText={prop.handleChange("confirmPassword")}
                                            icon={faGoogle}
                                        />
                                    </View>

                                    <TouchableOpacity style={styles.bobo} onPress={prop.handleSubmit}>
                                        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Login</Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        }}
                    </Formik>


                    <View style={styles.bighr}>
                        <View style={styles.hr}></View>
                        <Text style={{ color: "white", fontWeight: "bold" }}> Or Sign Up With</Text>
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

                    <View>
                        <TouchableOpacity style={styles.bighigh}>
                            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Already Have An Account Login </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        // borderColor:"goldenrod",
        // borderRadius:20,
        // borderTopRightRadius:250,
        // borderBottomLeftRadius:250,
        margin: 20,
        padding: 1
    },
    firstdi: {
        textAlign: "center",
        marginTop: "5%",
        fontSize: 30,
        fontWeight: "900",
        color: "white"
    },
    fere: {
        margin: "5%"
    },
    fere1: {
        margin: "5%",
        marginTop: "-3%",
    },
    texting: {
        borderWidth: 0,
        width: "100%",
        padding: "4%",
        margin: "0.9%",
        borderRadius: 30,
        backgroundColor: "#ffffffce",
    },
    bobo: {
        padding: "4%",
        backgroundColor: "goldenrod",
        margin: "5%",
        borderRadius: 30,
        marginTop: "1%",
    },
    bighigh: {
        marginTop: "10%",
    },
    bighr: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "4%",
    },
    hr: {
        borderTopWidth: "1%",
        borderTopColor: "white",
        marginTop: "2%",
        width: "25%",
        color: "white"
    },
    boda: {
        color: "white",
        borderWidth: "1%",
        borderColor: "#daa5208e",
        backgroundColor: "#daa5208e",
        borderRadius: 50,
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