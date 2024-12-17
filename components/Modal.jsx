import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const CustomAlert = ({ visible, setVisible, title, message, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>
          <View style={styles.resetContainer}>
          <Text style={styles.modalText}>{message + " "}</Text>
            <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          </View>
          <Button title="Close" onPress={setVisible} style={styles.closeBtn}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalTitle:{
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 700,
  },
  resetContainer: {
    display: "flex",
    flexDirection: "row",
  },
  closeBtn: {
    borderRadius: 100,
  },
  buttonText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default CustomAlert;
