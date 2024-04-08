import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", color: "white" }}>
          Welcome back.
        </Text>
        <Text style={{ marginTop: 5, color: "gray", fontSize: 15 }}>
          Please login to your account.
        </Text>
      </View>

      <View style={{ padding: 60 }}>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Username"
            placeholderTextColor="white"
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              width: 250,

              borderRadius: 15,
              backgroundColor: "#393E46",
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              width: 250,
              borderWidth: 1,
              borderRadius: 15,
              marginTop: 8,
              backgroundColor: "#393E46",
            }}
          />
        </View>

        <Pressable>
          <View style={{ marginTop: 5, marginLeft: "auto" }}>
            <Text style={{ fontSize: 12, color: "#00ADB5" }}>
              Forgot password?
            </Text>
          </View>
        </Pressable>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
            borderWidth: 0.8,
            borderRadius: 15,
            backgroundColor: "#00ADB5",
          }}
        >
          <Text
            style={{
              padding: 18,
              color: "white",
              fontWeight: "800",
              fontSize: 14,
            }}
          >
            Login
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text style={{ color: "white" }}>Or</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
            borderWidth: 0.8,
            borderRadius: 15,
            backgroundColor: "white",
          }}
        >
          <Text style={{ padding: 18, color: "black" }}>
            Sign in with Google
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            borderWidth: 0.8,
            borderRadius: 15,
            backgroundColor: "#4267B2",
          }}
        >
          <Text style={{ padding: 18, color: "white" }}>
            Sign in with Facebook
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 45,
          }}
        >
          <Text style={{ color: "white" }}>Don't have an account? </Text>
          <Text style={{ color: "#00ADB5" }}>Sign up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
