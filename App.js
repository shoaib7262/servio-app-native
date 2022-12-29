import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSuccesful from './src/screen/AccountSuccesful';
import CreateNewAccount from './src/screen/CreateNewAccount';
import WalkThrough from './src/screen/WalkThrough';
import LoginScreen from './src/screen/LoginScreen';
import LaunchScreen from './src/screen/LaunchScreen';
import SignUP from './src/screen/SignUP';
import OtpScreen from './src/screen/OtpScreen';
import ResetPasword from './src/screen/ResetPasword';

const App = () => {
  const [loading, setLoading] = useState(true);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LaunchScreen />
  ) : (
    // <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WalkThrough" screenOptions={{headerShown: false,}}>
          <Stack.Screen name="WalkThrough" component={WalkThrough} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Reset" component={ResetPasword} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="SignUp" component={SignUP} />
          <Stack.Screen name="Create" component={CreateNewAccount} />
          <Stack.Screen name="Succesful" component={AccountSuccesful} />

          {/* <LoginScreen/> */}
          {/* <ResetPasword/> */}
          {/* <OtpScreen/> */}
          {/* <SignUP/> */}
          {/* <CreateNewAccount/> */}
          {/* <AccountSuccesful/> */}
        </Stack.Navigator>
      </NavigationContainer>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroungColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
