import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {COLORS, SIZES} from '../constants/theme';
import Button from '../constants/Button';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState('');
  
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} style={{width: '100%',flex:1}}>
      <View style={Styles.backScreen}>
         
        <View style={Styles.signUpView}>
          <TouchableOpacity>
            <Text style={Styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.inputScreen}>
          <View style={Styles.IconScreen}>
            <Text>
              A
            </Text>
            <Text style={Styles.IconHeading}>SERVIO</Text>
          </View>
          <TextInput
            style={Styles.Input}
            onChangeText={setUserName}
            value={userName}
            placeholder="username/Mobile Number"
          />

          <TextInput
            style={Styles.Input}
            secureTextEntry={hidePass ? true : false}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
          />
          <View style={Styles.forgetpasword}>
           <TouchableOpacity  onPress={()=> navigation.navigate('Reset') }><Text>Forget Password</Text></TouchableOpacity>
          </View>
          <View style={Styles.nextButton}>
            <Button name="Next" />
          </View>
        </View>

        <View style={Styles.hrLineView}>
          <View style={Styles.hrLine}></View>
          <View>
            <Text style={Styles.hrLineText}>OR</Text>
          </View>
          <View style={Styles.hrLine}></View>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                marginVertical: '10%',
              }}>
              Login With
            </Text>
          </View>
          <View style={Styles.loginIcon}>
            <View>
              <Text style={Styles.loginFacbook}>f</Text>
            </View>
            <View>
              <Text style={{color: COLORS.white}}>G</Text>
            </View>
          </View>
        </View>
       
      </View>
      </ScrollView>
  );
};

const Styles = StyleSheet.create({
  backScreen: {
    
    height: '100%',
    width: '100%',
    backgroundColor: '#01008A',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  signUpView: {
    alignSelf: 'flex-end',
    marginRight:"2%"
  },
  signUp: {
    color: COLORS.white,
  },
  inputScreen: {
    margin: '10%',
    width: '80%',
    // height: 'auto',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: '5%',
  },
  Input: {
    height: 45,
    width: '100%',
    marginTop: '10%',
    borderWidth: 1,
    // padding: "5%",
    borderRadius: 10,
  },
  forgetpasword: {
    alignSelf: 'flex-end',
    marginBottom: 10,

    // width:"100%"
  },
  IconScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '8%',
  },
  IconHeading: {
    fontSize: SIZES.h2,
    color: COLORS.headingTwo,
  },
  nextButton: {
    marginVertical: '10%',
  },
  hrLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    
    width: '80%',
    marginVertical: '5%',
  },
  hrLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.heading,
  },
  hrLineText: {
    color: COLORS.white,
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginIcon: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loginFacbook: {
    fontWeight: '600',
    color: COLORS.heading,
  },
});

export default LoginScreen;
