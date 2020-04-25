import React from 'react';
import {Card, Title} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ErrorCard({error}) {
  return (
    <Card style={styles.container} elevation={5}>
      <Card.Content>
        <Title style={styles.title}>{error.message}</Title>
        <View style={styles.icon}>
          <FontAwesome5 light name="frown-open" color="#8c1700" size={100} />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    width: 300,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
