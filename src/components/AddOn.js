import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function DishAddOn({addOn}) {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.addOnContainer}>
      <View style={styles.addOn}>
        <Text style={styles.name}>{addOn.name}</Text>
        <Text style={styles.price}>KSH {addOn.price}</Text>
      </View>
      <View style={styles.addOn}>
        <CheckBox value={selected} onValueChange={setSelected} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addOnContainer: {
    flexDirection: 'row',
  },
  addOn: {
    margin: 10,
  },
  name: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#888',
    fontSize: 15,
  },
});
