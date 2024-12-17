import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default InputContainer = ({ navigation, onSubmit, optionalBtnText, optionalBtn }) => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.btnContainer}>
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.nextBtn}
                onPress={onSubmit}>
                <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
            </View>
            {(optionalBtn && optionalBtnText)? (
            <View style={styles.optText}>
            <Text>
                {optionalBtnText + " "}
            </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(optionalBtn)}>
                    <Text style={styles.optBtn}>{optionalBtn}</Text>
                </TouchableOpacity>
            </View>
            ) : undefined}

        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    backBtn: {
        width: 100,
        padding: 10,
        borderRadius: 6,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    nextBtn: {
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
    optText: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    optBtn: {
        // marginTop: 5,
        color: '#2271b1',
        textDecorationLine: 'underline',
    },
});
