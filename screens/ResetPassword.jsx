import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import ControlBtnContainer from '../components/ControlBtnContainer';
import SQLite from 'react-native-sqlite-storage';

const ResetPassword = ({ navigation, route }) => {
  const { name } = route.params; // Отримання переданих параметрів
  const [changeName, setChangeName] = useState(name || '');
  const newPassword = "11111111";
  const [isFocused, setIsFocused] = useState(false);

  const db = SQLite.openDatabase(
    {
      name: "db",
      location: "default",
    },
    () => { },
    error => { console.log(error) }
  );

  const changePassword = async () => {
    if (changeName) {
        try {
            await db.transaction(async (tx) => {
              // Перевірка наявності користувача з таким ім'ям
              await tx.executeSql(
                'SELECT * FROM users WHERE name = ?;',
                [changeName],
                (tx, results) => {
                  if (results.rows.length > 0) {
                    // Якщо користувач знайдений, оновлюємо пароль
                    tx.executeSql(
                      'UPDATE users SET password = ? WHERE name = ?;',
                      [newPassword, changeName],
                      () => {
                        console.log(changeName);
                        Alert.alert("Password reset to " + newPassword);
                      },
                      (error) => {
                        console.log('Error resetting password:', error);
                        Alert.alert('Error resetting password');
                      }
                    );
                  } else {
                    // Якщо користувача немає
                    Alert.alert("User with the given name not found");
                  }
                },
                (error) => {
                  console.log('Error checking user:', error);
                  Alert.alert('Error checking user existence');
                }
              );
            });
          } catch (err) {
            console.log('Database error:', err);
            Alert.alert('Problems with database');
          }
        } else {
      Alert.alert("Enter a valid name");
    }
  };

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.header}>Reset password</Text>
      <TextInput
        value={changeName}
        placeholder="Enter your name"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={isFocused ? "#2271b1" : "gray"}
        onChangeText={(text) => setChangeName(text)}
        style={[styles.input, { borderColor: isFocused ? "#2271b1" : "gray" }]}
      />
      <Button title="Reset" onPress={changePassword} />
      <ControlBtnContainer navigation={navigation} onSubmit={() => navigation.navigate("Login")} />
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
    fontWeight: "bold",
    margin: 50,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },
});

export default ResetPassword;
