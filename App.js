import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo-icon.png")} />
      <Text style={styles.text}>Artemiza</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 400,
    width: 400,
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});
