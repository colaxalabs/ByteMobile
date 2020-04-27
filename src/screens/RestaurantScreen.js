import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Slider from '../components/Slider';
import ErrorCard from '../components/ErrorCard';

// Construct query
const FIND_RESTAURANT = gql`
  query findRestaurant($id: ID!) {
    findRestaurant(id: $id) {
      restaurantName
      displayPics {
        id
        media
      }
    }
  }
`;

export default function RestaurantScreen() {
  // Get restaurant_id from route params
  const route = useRoute();
  // Query restaurant details
  const {loading, error, data} = useQuery(FIND_RESTAURANT, {
    variables: {
      id: `${route.params.id}`,
    },
  });
  // Check error
  if (error) {
    return (
      <View style={styles.container}>
        <ErrorCard error={error} />
      </View>
    );
  }

  // Check loading
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      {!loading && <Slider images={data.findRestaurant.displayPics} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
