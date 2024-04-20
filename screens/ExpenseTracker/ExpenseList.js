import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatCurrency } from '../../utils/currency';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <View style={styles.leftContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
              <TouchableOpacity onPress={() => onDeleteExpense(item.id)}>
                <Text style={styles.deleteButton}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '55%',
    marginVertical: 2,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 8,
    borderWidth: 1,
    borderColor: '#8B1268',
    marginVertical: 5,
    borderRadius: 15,
  },
  leftContainer: {
    flex: 1, 
  },
  rightContainer: {
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ExpenseList;
