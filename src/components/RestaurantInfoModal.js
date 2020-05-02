import React from 'react';
import {ScrollView, View, Text, StyleSheet, Linking} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';

export default function RestaurantInfoModal({restaurant}) {
  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          We are working with the Local Government to make sure your favorite
          restaurant is Licensed by the County Health Services.
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {restaurant.restaurantName} {}
          {restaurant.verified ? (
            <Octicons name="verified" size={20} />
          ) : (
            <Text>has not been verified.</Text>
          )}
        </Text>
      </View>
      {restaurant.verified ? (
        <View style={styles.textContainer}>
          <Text
            style={styles.telephone}
            onPress={() => Linking.openURL(`tel:${restaurant.telephone}`)}>
            Call {restaurant.telephone}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Regular',
  },
  textContainer: {
    marginTop: 10,
  },
  telephone: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Medium',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
