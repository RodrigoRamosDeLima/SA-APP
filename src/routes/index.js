import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Inbox from '../pages/Inbox'
import New from '../pages/New'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import ButtonNew from '../components/buttonNewPost'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
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
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="newspaper" size={size} color={color} />
            } else {
              return <Ionicons name="newspaper-outline" size={size} color={color} />
            }
          }
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="people" size={size} color={color} />
            } else {
              return <Ionicons name="people-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />
            } else {
              return <Ionicons name="person-outline" size={size} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator >
  )
}