import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Dish({dish}) {
  return (
    <View style={styles.container}>
      <View style={styles.dishContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.dishTitle}>{dish.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.dishDescription}>{dish.description}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.dishPrice}>KSH {dish.price}</Text>
          </View>
        </View>
        {dish.image ? (
          <View style={styles.imageContainer}>
            <Image source={{uri: dish.image}} style={styles.image} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dishContainer: {
    marginTop: 15,
  },
  dishTitle: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 20,
  },
  descriptionContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: 350,
  },
  dishDescription: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 15,
    color: '#888',
    flexWrap: 'wrap',
  },
  priceContainer: {
    marginTop: 5,
  },
  dishPrice: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 15,
    color: '#888',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  imageContainer: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    top: 20,
    position: 'absolute',
  },
  subContainer: {
    flexDirection: 'column',
  },
});
