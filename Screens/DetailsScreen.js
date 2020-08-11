import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white-content" backgroundColor="#123456" />
      <Text>Notifications</Text>
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

export default DetailsScreen;
