import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';


import InputContainer from '../components/InputContainer';
import Slider from '@react-native-community/slider';
import ControlBtnContainer from '../components/ControlBtnContainer';

const RegScreen = ({ navigation }) => {
  const [db, setDb] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [gender, setGender] = useState(0);

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.header}>Register</Text>
      <InputContainer
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
          thumbTintColor={`rgb(${parseInt(gender/100 * 255)}, 127, 255)`}
        />
        <Text style={styles.genderText}>Female</Text>
      </View>
      <Text style={[styles.genderPrc, {color: `rgb(${parseInt(gender/100 * 255)}, 127, 255)`}]}>{gender} %</Text>
      <ControlBtnContainer navigation={navigation} optionalBtn="Login"/> 

    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
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
