import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from '../screens/ChatScreen';
import Notifications from '../screens/Notifications';
import Contacts from '../screens/Contacts';
import Calls from '../screens/Calls';

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
      //  tabBarShowLabel:false,
        activeTintColor: '#e91e63',
        inactiveTintColor:"#3e2465",
        
  barStyle:{backgroundColor: '#694fad'},
            tabBarStyle:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:10,
                backgroundColor:'#ffffff',
                height:90,
                borderRadius:90,
                padding:30,

                ...styles.shadow
            },
            
            

            tabBarLabelStyle: {
              textTransform: 'none',
              margin:  10,

            },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="contacts" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
          tabBarBadge: 7,
          tabBarBadgeStyle:{
            backgroundColor:"red",
            marginTop:-8,
            marginLeft:-2,
          }
        }}
      />
     
      
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
