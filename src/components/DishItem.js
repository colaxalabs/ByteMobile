import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Button from 'react-native-really-awesome-button/src/themes/blue';

export default function DishItem() {
  const route = useRoute();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>{route.params.dish.description}</Text>
        <View style={styles.counterContainer}>
          <View>
            <Text style={styles.text}>-</Text>
          </View>
          <View>
            <Text style={styles.text}>0</Text>
          </View>
          <View>
            <Text style={styles.text}>+</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => console.log('Pressed!')}
            textFontFamily="IBMPlexSans-Bold"
            textSize={20}
            width={300}
            backgroundColor="#0062ff">
            Add Note
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 50,
  },
  counterContainer: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 20,
  },
});
