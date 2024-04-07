import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome6 } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{ padding: 15, borderBottomWidth: 0.8, borderColor: "gray" }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
          Settings
        </Text>
      </View>

      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            backgroundColor: "gray",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="user-large" size={24} color="white" />
          <View style={{ justifyContent: "" }}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "500",
                marginLeft: 8,
              }}
            >
              Your account
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "500",
                marginLeft: 8,
              }}
            >
              See information about your account.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
