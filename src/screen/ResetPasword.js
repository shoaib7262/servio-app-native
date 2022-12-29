import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import Button from '../constants/Button';
import { useNavigation } from '@react-navigation/native';

const ResetPasword = () => {
  const navigation = useNavigation();
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
   <Text> <Text style={styles.InputTextOne}>Create</Text> <Text style={styles.InputText}> New Password</Text></Text>
        <TextInput style={styles.Input} placeholder="New Password" />

        <TextInput style={styles.Input} placeholder="Confirm Password" />
        <View style={styles.save} ><Button name="Save" onPress={()=>navigation.navigate('Otp')} /></View>
      </View>
      
    </View>
    </ScrollView>
  );
};

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
    height:"50%",
    
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
    height:"50%",
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
    marginTop: '10%',
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

export default ResetPasword;
