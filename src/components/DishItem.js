import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Button from 'react-native-really-awesome-button/src/themes/blue';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import DishAddOn from './AddOn';

export default function DishItem() {
  const [counter, setCounter] = useState(0);
  const width = useWindowDimensions().width;
  const route = useRoute();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.text}>{route.params.dish.description}</Text>
            <Text style={styles.price}>KSH {route.params.dish.price}</Text>
          </View>
          <View style={{width: width}}>
            {route.params.dish.dishAddOn.length > 0 && (
              <Text style={styles.title}>Addons</Text>
            )}
            {route.params.dish.dishAddOn.map((addOn) => (
              <DishAddOn key={addOn.id} addOn={addOn} />
            ))}
          </View>
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
            <Text style={styles.counter}>{counter}</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginTop: 50,
  },
  addOnContainer: {
    margin: 10,
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
  },
  text: {
    margin: 10,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 25,
  },
  price: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#888',
    fontSize: 20,
    margin: 10,
    top: -15,
  },
  counter: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 40,
    padding: 10,
    bottom: 25,
  },
  iconPlus: {
    marginLeft: 50,
  },
  iconMinus: {
    marginRight: 50,
  },
  buttonContainer: {
    bottom: 20,
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 25,
    margin: 10,
    textDecorationLine: 'underline',
  },
});
