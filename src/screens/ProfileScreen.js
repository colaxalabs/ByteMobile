import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 40,
  },
});
