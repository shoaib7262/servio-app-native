import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const AccountSuccesful = () => {
  return (
    <View  style={styles.imagView}>
      
    <Image style={styles.Images} source={require('../assets/succesfullCreated.jpg')} />
  
</View>
  )
}

const styles = StyleSheet.create({
    imagView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        
        
    },
    Images:{
        width:"100%",
        height:"100%",
        
    }
})

export default AccountSuccesful