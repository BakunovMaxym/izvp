import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import WelcomeScreen from './screens/WelcomeScreen';
import RegScreen from './screens/RegScreen';
import LoginScreen from './screens/LoginScreen';
import ResetPassword from './screens/ResetPassword';
import Content from './screens/Content';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={WelcomeScreen}/>
      <Stack.Screen name="Register" component={RegScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword}/>
      <Stack.Screen name="Content" component={Content}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;
