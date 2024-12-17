import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage'; 

import InputContainer from '../components/InputContainer';
import Slider from '@react-native-community/slider';
import ControlBtnContainer from '../components/ControlBtnContainer';

const RegScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [gender, setGender] = useState(0);

  const db = SQLite.openDatabase(
    {
      name: "db",
      location: "default",
    },
    () => { },
    error => { console.log(error) }
  );

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, surname TEXT NOT NULL, password TEXT NOT NULL, gender INTEGER NOT NULL);'
      );
    });
  }
  useEffect(() => {
    createTable();
  }, [])

  const submitData = [name, surname, password, confPassword];

  const setData = async () => {
    if (submitData.every((data) => data !== "")) {
      if (password === confPassword) {
        try {
          await db.transaction(async (tx) => {
            await tx.executeSql(
              'INSERT INTO users (name, surname, password, gender) values (?, ?, ?, ?);',
              [name, surname, password, gender],
              () => {
                console.log("User added");
                navigation.navigate("Login")
              },
              (error) => {
                console.log('Error inserting data:', error);
              }
            );
          });
        } catch (err) {
          console.log('err', err)
        }
      } else {
        Alert.alert("Passwords must match");
      }
    } else {
      Alert.alert("Enter all the data");
    }
  }

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.header}>Register</Text>
      <InputContainer
        value={name}
        setFirst={setName}
        firstPlHld={"Enter name"}
        setSecond={setSurname}
        secondPlHld={"Enter surname"}
      />
      <InputContainer
        setFirst={setPassword}
        firstPlHld={"Enter password"}
        setSecond={setConfPassword}
        secondPlHld={"Confirm password"}
      condSecure={true}
      />
      <View style={styles.genderContainer}>
        <Text style={{ paddingTop: 10, paddingRight: 7 }}>Male</Text>
        <Slider
          value={gender}
          onSlidingComplete={(e) => setGender(e)}
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="gray"
          thumbTintColor={`rgb(${parseInt(gender / 100 * 255)}, 127, 255)`}
        />
        <Text style={styles.genderText}>Female</Text>
      </View>
      <Text style={[styles.genderPrc, { color: `rgb(${parseInt(gender / 100 * 255)}, 127, 255)` }]}>{gender} %</Text>
      <ControlBtnContainer navigation={navigation} onSubmit={setData} optionalBtnText={"Already have account?"} optionalBtn="Login" />
    </View>
  );
};

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
    margin: 50,
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

export default RegScreen;
