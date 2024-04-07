import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import GeneratorScreen from "./screens/GeneratorScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "gray", fontSize: 12 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={25} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
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
                <AntDesign name="home" size={25} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
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
                <AntDesign name="home" size={25} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
