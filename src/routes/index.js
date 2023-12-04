import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/Login/index'; 
import Cadastro from '../pages/Login/cadastro'; 

import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import New from '../pages/New';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import ButtonNew from '../components/buttonNewPost';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={TabRoutes} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0
        },
        tabBarActiveTintColor: "#bf00ff"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            focused ? 
            <Ionicons name="home" size={size} color={color} />
            :
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            focused ? 
            <Ionicons name="newspaper" size={size} color={color} />
            :
            <Ionicons name="newspaper-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => <ButtonNew size={size} />
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            focused ? 
            <Ionicons name="people" size={size} color={color} />
            :
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            focused ? 
            <Ionicons name="person" size={size} color={color} />
            :
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}



