import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather, AntDesign } from "@expo/vector-icons";

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

      {/* Account Setting Button. */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
            <View>
              <Feather
                style={{ marginLeft: 15 }}
                name="user"
                size={28}
                color="gray"
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>
                Your account
              </Text>
              <Text style={{ color: "gray" }}>
                See information about your account.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Border. */}
      <View
        style={{
          borderBottomColor: "#EEEDEB",
          borderBottomWidth: 0.8,
          marginTop: 15,
          borderColor: "gray",
        }}
      />

      {/* Privacy & Security. */}
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
            <View>
              <AntDesign
                style={{ marginLeft: 15 }}
                name="lock1"
                size={28}
                color="gray"
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>
                Privacy and Security
              </Text>
              <Text style={{ color: "gray" }}>
                Manage your account's security.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Border. */}
      <View
        style={{
          borderBottomColor: "#EEEDEB",
          borderBottomWidth: 0.8,
          marginTop: 15,
          borderColor: "gray",
        }}
      />

      {/* Log out. */}
      <View style={{ padding: 25, marginTop: "auto" }}>
        <View
          style={{
            marginTop: 25,
            padding: 10,
            backgroundColor: "#00ADB5",
            borderRadius: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "500" }}
          >
            LOG OUT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
