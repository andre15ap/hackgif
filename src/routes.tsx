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
      <StatusBar
        backgroundColor={COLORS.PRIMARY_DARK}
        barStyle="light-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Hackers Gifs',
            headerTintColor: COLORS.WHITE,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.PRIMARY,
            },
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
