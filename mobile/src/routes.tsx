import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView} from './views/Home/Home';
import React from 'react';
import {LoginView} from './views/Login';
import {OrdersView} from './views/Orders';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Orders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          // animation: 'slide_from_bottom',
          backgroundColor: '#003399',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: 'FiraSansExtraCondensed-Regular',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersView}
        options={{
          title: 'Pedidos',
        }}
      />
    </Stack.Navigator>
  );
}
