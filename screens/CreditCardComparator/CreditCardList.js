import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CreditCardList = ({ cards, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarjetas Disponibles</Text>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardItem} onPress={() => onSelect(item)}>
            <View style={styles.cardInfo}>
              <Image source={{ uri: item.imagen_url }} style={styles.cardImage} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardName}>{item.nombre}</Text>
                <Text>Tipo: {item.tipo}</Text>
                <Text>Inst: {item.inst}</Text>
                <Text>Salario Requerido: {item.salario_requerido}</Text>
                {item.tipo === 'Crédito' && (
                  <Text>Tasa de Interés: {parseFloat(item.tasa_interes)}%</Text>
                )}
                <Text>Beneficios:</Text>
                <View>
                  {item.beneficios.map((beneficio, index) => (
                    <Text key={index}>- {beneficio}</Text>
                  ))}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#741674',
    marginVertical: 2,
    borderRadius: 15,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 150,
    height: 100,
    marginRight: 20,
    resizeMode: 'contain',
  },
  cardTextContainer: {
    flex: 1,
  },
  cardName: {
    fontWeight: 'bold',
  },
});

export default CreditCardList;