import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton } from '../Components/AppButton';

export function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <AppButton onPress={() => navigation.navigate("Profile")} >Profile</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({});