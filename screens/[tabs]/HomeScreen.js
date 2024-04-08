import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{ padding: 15, borderBottomWidth: 0.8, borderColor: "gray" }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
          My vault
        </Text>
      </View>

      <View style={{ padding: 15 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("LoginPassword");
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: "#393E46",
              borderRadius: 15,
              gap: 8,
              flexDirection: "row",
            }}
          >
            <Ionicons name="key-outline" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Login passwords
            </Text>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("CardScreen");
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: "#393E46",
              borderRadius: 15,
              gap: 8,
              flexDirection: "row",
              marginTop: 8,
            }}
          >
            <Ionicons name="key-outline" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Credit / Debit cards
            </Text>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("SecureNoteScreen");
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: "#393E46",
              borderRadius: 15,
              gap: 8,
              flexDirection: "row",
              marginTop: 8,
            }}
          >
            <Ionicons name="key-outline" size={24} color="white" />
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Secure notes
            </Text>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
