import React, { useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
// import Slider from '@react-native-community/slider';
// import LoginScreen from './LoginScreen';
// import RegScreen from './RegScreen';
// import { AppNavigateContext, AppNavigateProvider } from '../context/NavigateContext';

const WelcomeScreen = ({navigation}) =>{
  // const { navigate, setNavigate } = useContext(AppNavigateContext);

    return (
      <View>
        <Text>WelcomeScreen</Text>
        <Button onPress={() => navigation.navigate("Login")} title='Login'/>
        <Button onPress={() => navigation.navigate("Register")} title='Register'/>
      </View>
    )
}

export default WelcomeScreen
