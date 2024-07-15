import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export function EditProfile({ route }) {
  const { userUID } = route.params;

  return (
    <SafeAreaView>
      <Text>Edit Profile</Text>
      <Text>User ID:{userUID}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})