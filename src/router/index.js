import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login, Splash} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};

export default Router;