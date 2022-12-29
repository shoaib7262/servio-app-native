import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from '../constants/Button'


const OtpScreen = () => {
  return (
    <View style={styles.OtpView}>
      <Text>Verification</Text>
      <Text>Please enter your OTP send to your mobile number</Text>
    <Button name="verify OTP"/> 
    </View>
  )
}

const styles = StyleSheet.create({
    OtpView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default OtpScreen