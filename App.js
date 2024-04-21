import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Text, View, TextInput, ScrollView, Image, Button } from 'react-native';

// Import screens
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import UserList from './src/screens/users';
// import Bottom_nav from './src/navigation/BottomNav'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Luwi'}}
        />
        {/* <Stack.Screen name='UserList' component={UserList} options={{title: 'Users'}}/> */}
        {/* <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}}/> */}
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
    {/* <Bottom_nav /> */}
    </>
  );
}
