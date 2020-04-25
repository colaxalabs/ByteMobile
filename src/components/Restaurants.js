import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import mapstyle from '../../mapstyle.json';

import NoRestaurants from './NoRestaurantsCard';
import ErrorCard from './ErrorCard';

const NEARBY_QUERY = gql`
  query findNearByRestaurants($lon: Float!, $lat: Float!) {
    findNearByRestaurants(input: {lon: $lon, lat: $lat}) {
      id
      restaurantName
      about
      telephone
      verified
      addresses {
        lon
        lat
      }
    }
  }
`;

export default function Restaurants({longitude, latitude, navigation}) {
  const {loading, error, data} = useQuery(NEARBY_QUERY, {
    variables: {
      lon: `${longitude}`,
      lat: `${latitude}`,
    },
  });
  const [isReady, setIsReady] = useState(false);
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorCard error={error} />
      </SafeAreaView>
    );
  }

  if (data.findNearByRestaurants.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <NoRestaurants />
      </SafeAreaView>
    );
  }
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.015 / 1.5,
        longitudeDelta: 0.0121 / 1.5,
      }}
      zoomEnabled
      loadingEnabled
      onMapReady={() => setIsReady(true)}
      customMapStyle={mapstyle}>
      {isReady &&
        data.findNearByRestaurants.map((r) => (
          <Marker
            onPress={() => {
              navigation.navigate('RestaurantDetails', {
                id: r.id,
                name: r.restaurantName,
              });
            }}
            key={r.id}
            coordinate={{
              latitude: r.addresses[0].lat,
              longitude: r.addresses[0].lon,
            }}>
            <FontAwesome5 name="map-marker" color="#0062FF" size={37} />
          </Marker>
        ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
