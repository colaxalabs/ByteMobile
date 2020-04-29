import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function About({restaurant}) {
  // Open external URL
  // const openExternalURL = async (url) => {
  //   const supported = await Linking.canOpenURL(url);
  //   if (supported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert(`Don't know how to open this address: ${url}`);
  //   }
  // };

  // // Open Restaurant location
  // const openGPS = (lat, lon) => {
  //   var scheme = Platform.OS === 'android' ? 'geo:' : 'maps:';
  //   var url = scheme + lat + lon;
  //   openExternalURL(url);
  // };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{restaurant.restaurantName}</Text>
      </View>
      <View>
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
      </View>
      <View>
        <Text style={styles.about}>{restaurant.about}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>
          <FontAwesome5 name="info-circle" size={20} />
          Restaurant Info
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  text: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 25,
  },
  cuisine: {
    color: '#888',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
  },
  about: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
  },
  address: {
    marginTop: 5,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
    color: '#0062FF',
  },
  addressContainer: {
    marginTop: 20,
  },
});
