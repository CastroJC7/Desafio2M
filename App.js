import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ExpenseTrackerScreen from './screens/ExpenseTracker/ExpenseTrackerScreen';
import CreditCardComparatorScreen from './screens/CreditCardComparator/CreditCardComparatorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Expense Tracker" component={ExpenseTrackerScreen} />
        <Tab.Screen name="Credit Card Comparator" component={CreditCardComparatorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
