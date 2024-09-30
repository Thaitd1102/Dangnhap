import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function PhoneInput({ phoneNumber, setPhoneNumber }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="phone-pad"
      value={phoneNumber}
      onChangeText={setPhoneNumber}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
