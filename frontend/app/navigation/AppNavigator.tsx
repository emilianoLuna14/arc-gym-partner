// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import MatchmakingScreen from '../screens/matchmaking';
import ProfileScreen from '../screens/profile';
import ChatScreen from '../screens/chat';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Matchmaking" component={MatchmakingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
);

export default AppNavigator;