import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign, Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/[tabs]/HomeScreen";
import SettingsScreen from "./screens/[tabs]/SettingsScreen";
import GeneratorScreen from "./screens/[tabs]/GeneratorScreen";

import LoginPassword from "./screens/LoginPasswordScreen";
import CardScreen from "./screens/CardScreen";
import SecureNoteScreen from "./screens/SecureNoteScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "My Password",
          tabBarLabelStyle: { color: "gray", fontSize: 12 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="home" size={24} color="#00ADB5" />
            ) : (
              <Feather name="home" size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Generator"
        component={GeneratorScreen}
        options={{
          tabBarLabel: "Generator",
          tabBarLabelStyle: { color: "gray", fontSize: 12 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="pluscircleo" size={24} color="#00ADB5" />
            ) : (
              <AntDesign name="pluscircleo" size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { color: "gray", fontSize: 12 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="settings" size={24} color="#00ADB5" />
            ) : (
              <Feather name="settings" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPassword"
          component={LoginPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CardScreen"
          component={CardScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SecureNoteScreen"
          component={SecureNoteScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
