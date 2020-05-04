/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {BlurView} from 'expo-blur';
import {StyleSheet} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/screens/HomeScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import DishItem from './src/components/DishItem';

import {Provider as PaperProvider} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const link = new HttpLink({
  uri: 'https://455d538f.ngrok.io/query',
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

function Restaurant() {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        headerMode: 'screen',
        mode: 'modal',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTitleStyle: {
          fontFamily: 'IBMPlexSans-Bold',
        },
        headerTransparent: 'true',
        headerBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}>
      <Stack.Screen name="Explore" component={HomeScreen} />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.name,
          headerShown: 'true',
          headerTransparent: 'true',
        })}
        name="RestaurantDetails"
        component={RestaurantScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.dish.title,
          headerShown: 'true',
        })}
        name="DishItem"
        component={DishItem}
      />
    </Stack.Navigator>
  );
}

export function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                fontFamily: 'IBMPlexSans-Regular',
                fontSize: 14,
              },
              tabStyle: {
                backgroundColor: '#f2f2f2',
              },
            }}
            initialRouteName="Home">
            <Tab.Screen
              options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome5 name="search" color={color} size={20} />
                ),
              }}
              name="Home"
              component={Restaurant}
            />
            <Tab.Screen
              options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome5 name="heart" color={color} size={20} />
                ),
              }}
              name="Favorite"
              component={FavoriteScreen}
            />
            <Tab.Screen
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome5 name="user" color={color} size={20} />
                ),
              }}
              name="Profile"
              component={ProfileScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}

export default App;
