import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PhoneInput from './PhoneInput';
import ContinueButton from './ContinueButton';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleContinue = () => {
    const formattedNumber = formatPhoneNumber(phoneNumber);
    if (!isValidPhoneNumber(formattedNumber)) {
      Alert.alert('Số điện thoại không hợp lệ!', 'Vui lòng nhập số điện thoại hợp lệ.');
      return;
    }
    console.log('Số điện thoại:', formattedNumber);
  };

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10,14}$/; 
    return phoneRegex.test(number);
  };

  const formatPhoneNumber = (number) => {
    return number.replace(/\D/g, '');
  };

  const handlePhoneInputChange = (text) => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);
    setIsPhoneValid(isValidPhoneNumber(formattedText)); // Kiểm tra tính hợp lệ khi nhập
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <PhoneInput 
        phoneNumber={phoneNumber} 
        setPhoneNumber={handlePhoneInputChange} 
        isValid={isPhoneValid} // Truyền thông tin về tính hợp lệ
      />
      <ContinueButton onPress={handleContinue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
});
