import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import Button from '../constants/Button';

const CreateNewAccount = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}  style={{width: '100%',}}>
    <View style={styles.resetpassword}>
      <View style={styles.imagView}>
        <Image
          style={styles.imagstyle}
          source={require('../assets/resetpassword.jpg')}
        />
      </View>
      <View style={styles.InputView}>
   <Text> <Text style={styles.InputTextOne}>Create</Text> <Text style={styles.InputText}> New Account</Text></Text>
        <TextInput style={styles.Input} placeholder="Enter Your Username" />
        <TextInput style={styles.Input} keyboardType="email-address" placeholder="Enter Your Mail ID" />
        <TextInput style={styles.Input} keyboardType="visible-password" placeholder="Create Password" />
        <TextInput style={styles.Input} keyboardType="visible-password" placeholder="Confirm Password" />
        <View style={styles.save} ><Button name="Continue" /></View>
      </View>
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    resetpassword: {
      width: '100%',
      // height:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    imagView: {
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      height:"40%",
      
    },
    imagstyle: {
      // flex:1,
      resizeMode:"center",
      width: "100%",
      // height: 100,
    },
    InputView: {
      backgroundColor: COLORS.screenBackground,
      
      width:"100%",
      height:"60%",
      justifyContent:"center",
      alignItems:"center",
      borderTopLeftRadius:30,
      borderTopRightRadius:30
    },
    InputText:{
      color:COLORS.white,
    },
    InputTextOne:{
      color:COLORS.heading
    },
    Input: {
      height: 45,
      width: '80%',
      marginTop: '5%',
      borderWidth: 1,
      // padding: "5%",
      borderRadius: 10,
      backgroundColor: COLORS.white,
    },
    save:{
      width:"80%",
      marginTop:"10%"
    }
  });
export default CreateNewAccount