import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseTrackerScreen from '../screens/ExpenseTracker/ExpenseTrackerScreen';
import CreditCardComparatorScreen from '../screens/CreditCardComparator/CreditCardComparatorScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExpenseTracker" component={ExpenseTrackerScreen} />
      <Tab.Screen name="CreditCardComparator" component={CreditCardComparatorScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;