import { StyleSheet, Text, View, StatusBar } from "react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <View>
        <StatusBar barStyle="light-content" />
      </View>

      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
