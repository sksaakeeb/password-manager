import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const GeneratorScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{ padding: 15, borderBottomWidth: 0.8, borderColor: "gray" }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
          Password generator
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default GeneratorScreen;

const styles = StyleSheet.create({});
