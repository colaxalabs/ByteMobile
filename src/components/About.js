import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import RestaurantInfoModal from './RestaurantInfoModal';

export default function About({restaurant}) {
  const [modalVisible, setModalVisible] = useState(false);
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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RestaurantInfoModal restaurant={restaurant} />

            <AwesomeButton
              backgroundColor="#0062ff"
              textFontFamily="IBMPlexSans-Regular"
              textSize={20}
              width={300}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              Close
            </AwesomeButton>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.text}>
          {restaurant.restaurantName}
          {restaurant.verified ? (
            <Octicons name="verified" size={20} />
          ) : null}, {restaurant.about}, {restaurant.addresses[0].addressString}
        </Text>
      </View>
      <View>
        <Text style={styles.cuisine}>
          {restaurant.cuisine} {'\u2022'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addressContainer}>
        <Text style={styles.info}>
          <FontAwesome5 name="info-circle" size={20} />
          Restaurant Info
        </Text>
      </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
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
