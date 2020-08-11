import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white-content" backgroundColor="#009387" />
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fafa",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
