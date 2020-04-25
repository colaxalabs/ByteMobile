import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

export default function RestaurantScreen() {
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>
        Restaurant screen id: {JSON.stringify(route.params.id)}
      </Title>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 18,
  },
});
