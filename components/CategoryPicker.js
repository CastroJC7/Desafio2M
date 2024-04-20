import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const CategoryPicker = ({ selectedCategory, onValueChange }) => {
  return (
    <Picker
      selectedValue={selectedCategory}
      onValueChange={onValueChange}
      style={styles.picker}
    >
      <Picker.Item label="Alimentación" value="Alimentación" />
      <Picker.Item label="Entretenimiento y Ocio" value="Entretenimiento y Ocio" />
      <Picker.Item label="Vivienda" value="Vivienda" />
      <Picker.Item label="Salud" value="Salud" />
      <Picker.Item label="Otros" value="Otros" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#8B1268',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default CategoryPicker;
