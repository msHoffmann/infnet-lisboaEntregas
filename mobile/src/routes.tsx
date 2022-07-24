import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView} from './views/Home/Home';
import React from 'react';
import {LoginView} from './views/Login';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          // animation: 'slide_from_bottom',
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginView} />
    </Stack.Navigator>
  );
}
