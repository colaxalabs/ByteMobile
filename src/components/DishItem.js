import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Button from 'react-native-really-awesome-button/src/themes/blue';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DishItem() {
  const [counter, setCounter] = useState(0);
  const route = useRoute();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.dishDescription}>
          <Text style={styles.text}>{route.params.dish.description}</Text>
        </View>
        <View style={styles.counterContainer}>
          <View>
            <Text
              style={styles.iconMinus}
              onPress={() => (counter >= 1 ? setCounter(counter - 1) : null)}>
              <FontAwesome5 name="minus" size={30} />
            </Text>
          </View>
          <View>
            <Text onPress={() => console.log('')} style={styles.counter}>
              {counter}
            </Text>
          </View>
          <View>
            <Text
              style={styles.iconPlus}
              onPress={() => setCounter(counter + 1)}>
              <FontAwesome5 name="plus" size={30} />
            </Text>
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
    paddingTop: 100,
  },
  dishDescription: {
    marginTop: 100,
    paddingTop: 100,
  },
  counterContainer: {
    marginTop: 130,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 80,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 20,
  },
  counter: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 30,
    padding: 10,
    bottom: 17,
  },
  iconPlus: {
    marginLeft: 50,
  },
  iconMinus: {
    marginRight: 50,
  },
});
