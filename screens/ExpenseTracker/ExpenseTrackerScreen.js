// screens/ExpenseTracker/ExpenseTrackerScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import ExpenseService from '../../services/ExpenseService';

const ExpenseTrackerScreen = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = () => {
      const expensesData = ExpenseService.getExpenses();
      setExpenses(expensesData);
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = (newExpense) => {
    const updatedExpenses = ExpenseService.addExpense(newExpense);
    setExpenses(updatedExpenses);
  };

  const handleDeleteExpense = (id) => {
    ExpenseService.deleteExpense(id);
    setExpenses(ExpenseService.getExpenses());
  };

  return (
    <View style={styles.container}>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      <ExpenseSummary expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExpenseTrackerScreen;