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
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from './src/context/BlogContext';

// Screens
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{title: 'Blogs'}}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{title: 'Show'}}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{title: 'Create'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
