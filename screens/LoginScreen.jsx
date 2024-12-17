import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useContext, useState } from 'react'
import ControlBtnContainer from '../components/ControlBtnContainer'
import SQLite from 'react-native-sqlite-storage';
import InputContainer from '../components/InputContainer';
import CustomAlert from '../components/Modal';

const LoginScreen = ({ navigation }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const db = SQLite.openDatabase(
    {
      name: "db",
      location: "default",
    },
    () => { },
    error => { console.log(error) }
  );

  console.log(name)
  console.log(password)
  const getData = async () => {
    if (name !== "" && password !== "") {
      try {
        await db.transaction(async (tx) => {
          await tx.executeSql(
            `SELECT * FROM users WHERE name LIKE ?`,
            [name],
            (tx, results) => {
              if (results.rows.length > 0) {
                if (results.rows.item(0).password === password) {
                  navigation.navigate("Content")
                } else {
                  setTitle('Incorrect password');
                  setMessage('Forgot the password?');
                  setAlertVisible(true);
                }
              } else {
                Alert.alert("User with such name doesn't exist")
              }
            },
            (error) => {
              if (error.message.includes("no such column")) {
                Alert.alert("User with such name doesn't exist")
              } else {
                Alert.alert("An error occurred while querying the database.");
              }
            }
          );
        });
      } catch (err) {
        console.log('err', err);
        Alert.alert("An error occurred during login");
      }
    } else {
      Alert.alert("Fill in the name and password fields")
    }
  }

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.header}>Login</Text>
      <InputContainer
        setFirst={setName}
        firstPlHld={"Enter name"}
        secondSecure={true}
        setSecond={setPassword}
        secondPlHld={"Enter password"}
      />
      <ControlBtnContainer navigation={navigation} onSubmit={getData} optionalBtnText="Don't have account yet?" optionalBtn="Register" />
      <CustomAlert
  visible={alertVisible}
  setVisible={setAlertVisible}
  title={title}
  message={message}
  onClose={() => {
    navigation.navigate("ResetPassword", { name });
    setAlertVisible(false);
  }}
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
    fontSize: 32,
    fontWeight: 700,
    marginTop: 90,
    marginBottom: 20,
  },
  genderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  genderText: {
    paddingTop: 10,
  },
  genderPrc: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 15,
  }
});

export default LoginScreen
