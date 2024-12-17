import { Text, View } from 'react-native';
import React, { Component, useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

export default InputContainer = ({ setFirst, firstPlHld, secondSecure, setSecond, secondPlHld }) => {
    const [isFirstFocused, setIsFirstFocused] = useState(false);
    const [isSecondFocused, setIsSecondFocused] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onFocus={() => { setIsFirstFocused(true) }}
                onBlur={() => {setIsFirstFocused(false)}}
                placeholder={firstPlHld}
                placeholderTextColor={isFirstFocused ? "#2271b1" : "gray"}
                onChangeText={(text) => { setFirst(text) }}
                style={[styles.textInput, {borderColor: isFirstFocused ? "#2271b1" : "gray"}]} />
            <TextInput
                onFocus={() => { setIsSecondFocused(true) }}
                onBlur={() => {setIsSecondFocused(false)}}
                placeholder={secondPlHld}
                placeholderTextColor={isSecondFocused ? "#2271b1" : "gray"}
                onChangeText={(text) => { setSecond(text) }}
                style={[styles.textInput, {borderColor: isSecondFocused ? "#2271b1" : "gray"}]} 
                secureTextEntry={secondSecure}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        maxWidth: 550,
        width: "80%",
        justifyContent: "space-between",
    },
    textInput: {
        // maxWidth: 250,
        width: "45%",
        borderRadius: 6,
        borderColor: "#2271b1",
        borderWidth: 1,
    }
})