import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Dish from './Dish';

export default function Menu({menu}) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.menuHeadline}>{menu.headline}</Text>
      </View>
      <View style={styles.dishesContainer}>
        {menu.dishes.length === 0
          ? null
          : menu.dishes.map((dish) => <Dish key={dish.id} dish={dish} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 30,
    flex: 1,
  },
  headlineContainer: {
    backgroundColor: '#fff',
  },
  menuHeadline: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 20,
    padding: 20,
    paddingLeft: 5,
  },
  dishesContainer: {
    marginTop: 10,
    paddingLeft: 5,
  },
});
