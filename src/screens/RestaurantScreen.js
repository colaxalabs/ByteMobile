import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Slider from '../components/Slider';
import ErrorCard from '../components/ErrorCard';
import About from '../components/About';

// Construct query
const FIND_RESTAURANT = gql`
  query findRestaurant($id: ID!) {
    findRestaurant(id: $id) {
      restaurantName
      telephone
      about
      cuisine
      addresses {
        addressString
      }
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
    <SafeAreaView>
      <ScrollView>
        <View>
          {!loading && <Slider images={data.findRestaurant.displayPics} />}
        </View>
        <View>
          <About restaurant={data.findRestaurant} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
