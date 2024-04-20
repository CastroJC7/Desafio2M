import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const AmountInput = ({ value = '', onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Monto"
      keyboardType="numeric"
      value={value.toString()} 
onChangeText={onChangeText}    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#741674',
    padding: 10,
    marginBottom: 10,
  },
});

export default AmountInput;
