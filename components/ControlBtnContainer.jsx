import { Button, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export default InputContainer = ({ navigation, optionalBtn }) => {
    
    return (
        <View style={styles.btnContainer}>
            <Button style = {styles.backBtn} width={"15%"} color={"#d63638"} onPress={() => navigation.goBack()} title='Back' />
            <Button style = {styles.nextBtn} color={"#2271b1"} onPress={() => navigation.navigate(optionalBtn) } title={optionalBtn} />
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        maxWidth: 100,
        width: "50%",
        // justifyContent: "",
    },
    backBtn: {
        // maxWidth: 250,
        width: 100,
        borderRadius: 6,
        backgroundColor: "red",
        color: "white",
    },
    nextBtn: {
        // maxWidth: 250,
        width: 100,
        borderRadius: 6,
        backgroundColor: "#fefefe",
        color: "white",
    }
})