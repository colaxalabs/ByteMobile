import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

import Restaurants from '../components/Restaurants';

export default function HomeScreen() {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Byte',
            message:
              'Byte would like access to your location for a better personalized experience',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              setLongitude(position.coords.longitude);
              setLatitude(position.coords.latitude);
            },
            (error) => Alert.alert(error.message),
            {
              enableHighAccuracy: true,
            },
          );
        } else {
          console.warn('Location access permission denied!');
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  }, [latitude, longitude]); // Perform re-render if latitude, longitude changes
  return (
    <Restaurants
      latitude={latitude}
      longitude={longitude}
      navigation={navigation}
    />
  );
}
