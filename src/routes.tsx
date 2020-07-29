import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar} from 'react-native';

import COLORS from './librarys/colors';

import HomeScreen from './screens/home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
