import React, { useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const WelcomeScreen = ({navigation}) =>{
    return (
      <View style={styles.contentWrapper}>
        <Text style={styles.header}>Welcome to my app</Text>
        <FastImage
      style={styles.gif}
      source={{
        uri: 'https://gifdb.com/images/high/cute-grizzly-bear-waving-hello-meme-czjzpdjrt3gm35d1.gif',
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")} title='Login'><Text style={styles.btnText}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Register")} title='Register'><Text style={styles.btnText}>Register</Text></TouchableOpacity>
    </View>
      </View>
    )
}

const styles = StyleSheet.create({
  contentWrapper: {
    marginTop: "30%",
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 0,
  },
  gif: { 
    width: "80%",
     height: 300, 
    },
    btn: {
      width: 100,
      padding: 10,
      borderRadius: 6,
      backgroundColor: '#2271b1',
      alignItems: 'center',
  },
  btnText: {
      color: 'white',
      fontSize: 16,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
},
});

export default WelcomeScreen
