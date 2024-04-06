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
      <View>
        <StatusBar barStyle="light-content" />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Welcome back.</Text>
        <Text style={{ marginTop: 5 }}>Please login to your account.</Text>
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
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              width: 250,
              borderWidth: 1,
              borderRadius: 15,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              width: 250,
              borderWidth: 1,
              borderRadius: 15,
              marginTop: 8,
            }}
          />
        </View>

        <Pressable>
          <View style={{ marginTop: 5, marginLeft: "auto" }}>
            <Text style={{ fontSize: 12 }}>Forgot password?</Text>
          </View>
        </Pressable>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
            borderWidth: 0.8,
            borderRadius: 15,
          }}
        >
          <Text style={{ padding: 18 }}>Login</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text>Or</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
            borderWidth: 0.8,
            borderRadius: 15,
          }}
        >
          <Text style={{ padding: 18 }}>Sign in with Google</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            borderWidth: 0.8,
            borderRadius: 15,
          }}
        >
          <Text style={{ padding: 18 }}>Sign in with Facebook</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 45,
          }}
        >
          <Text>Don't have an account? </Text>
          <Text>Sign up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
