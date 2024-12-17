import React, { useContext } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const Content = ({navigation}) =>{
    return (
      <View style={styles.contentWrapper}>
        <Text style={styles.header}>Successfuly loggined! </Text>
    <FastImage
      style={{ width: 200, height: 200 }}
      source={{
        uri: 'https://i.pinimg.com/originals/b2/68/ff/b268ffefc732190e35bc3474bf24fe23.gif',
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
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
    paddingInline: 10,
    textShadowColor: "purple",
    textShadowRadius: 10,
    color: "white",
    fontSize: 32,
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 20,
  },
})

export default Content
