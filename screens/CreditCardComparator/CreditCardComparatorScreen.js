import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCreditCards } from '../../services/CreditCardService';
import CreditCardList from './CreditCardList';
import CreditCardDetails from './CreditCardDetails';
import AmountInput from '../../components/AmountInput';

const CreditCardComparatorScreen = () => {
  const [creditCards, setCreditCards] = useState([]);
  const [userSalary, setUserSalary] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchCreditCards = async () => {
      const data = await getCreditCards();
      setCreditCards(data);
    };
    fetchCreditCards();
  }, []);

  const handleSalaryChange = (salary) => {
    setUserSalary(parseFloat(salary) || 0);
  }

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  }

  const filteredCards = creditCards.filter(card => card.salario_requerido <= userSalary);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese su salario:</Text>
      <AmountInput value={userSalary} onChangeText={handleSalaryChange} />
      <CreditCardList cards={filteredCards} onSelect={handleCardSelect} />
      {selectedCard && <CreditCardDetails card={selectedCard} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', 
  },
});

export default CreditCardComparatorScreen;
