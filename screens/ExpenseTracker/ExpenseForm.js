import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import CategoryPicker from '../../components/CategoryPicker';
import { expenseValidationSchema } from '../../utils/validation';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('0'); 
  const [category, setCategory] = useState('Alimentación');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Convertimos el monto a un número flotante antes de enviarlo al manejador de agregar gasto
    const newExpense = { description, amount: parseFloat(amount), category };
    expenseValidationSchema
      .validate(newExpense, { abortEarly: false })
      .then(() => {
        onAddExpense(newExpense);
        setDescription('');
        setAmount('0');
        setErrorMessage('');
      })
      .catch((errors) => {
        const errorMessages = errors.inner.map((error) => error.message);
        setErrorMessage(`Errors complete el campo: [${errorMessages.join(', ')}]`);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descripción del gasto"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount} 
      />
      <CategoryPicker selectedCategory={category} onValueChange={setCategory} />
      <Button
        title="Agregar Gasto"
        onPress={handleSubmit}
        color="#5B2C6F" 
        style={styles.button} 
      />
      {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '55%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B1268',
    padding: 10,
    marginBottom: 10,
  },

  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default ExpenseForm;
