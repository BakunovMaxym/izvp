import { Button, Text, View } from 'react-native'
import React, { Component, useContext } from 'react'
// import WelcomeScreen from './WelcomeScreen';
// import RegScreen from './RegScreen';
// import { AppNavigateContext } from '../context/NavigateContext';

const LoginScreen = ({navigation}) => {
  // const { navigate, setNavigate } = useContext(AppNavigateContext);

    return (
      <View>
        <Button onPress={() => navigation.navigate("Home")}  title='Cancel'/>
        <Text>Login</Text>
        <Button onPress={() => navigation.navigate("Register")}  title='Register'/>
      </View>
    )
}

export default LoginScreen
