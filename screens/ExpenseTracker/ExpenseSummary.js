import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCurrency } from '../../utils/currency';

const ExpenseSummary = ({ expenses }) => {
  const getTotalByCategory = (category) => {
    return expenses.filter((item) => item.category === category)
      .reduce((total, item) => total + item.amount, 0);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de Gastos</Text>
      <View style={styles.summaryBox}>
        <Text>Alimentación:</Text>
        <Text>{formatCurrency(getTotalByCategory('Alimentación'))}</Text>
      </View>
      <View style={styles.summaryBox}>
        <Text>Entretenimiento y Ocio:</Text>
        <Text>{formatCurrency(getTotalByCategory('Entretenimiento y Ocio'))}</Text>
      </View>
      <View style={styles.summaryBox}>
        <Text>Vivienda:</Text>
        <Text>{formatCurrency(getTotalByCategory('Vivienda'))}</Text>
      </View>
      <View style={styles.summaryBox}>
        <Text>Salud:</Text>
        <Text>{formatCurrency(getTotalByCategory('Salud'))}</Text>
      </View>
      <View style={styles.summaryBox}>
        <Text>Otros:</Text>
        <Text>{formatCurrency(getTotalByCategory('Otros'))}</Text>
      </View>
      <Text style={styles.total}>Total de Gastos: {formatCurrency(getTotalExpenses())}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default ExpenseSummary;
