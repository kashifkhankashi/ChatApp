import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white-content" backgroundColor="#694fad" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MIcon name="menu" size={30} color="green" />
        </TouchableOpacity>
      </View>
      <Text>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fafa",
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    paddingRight: 10,
  },
});

export default ExploreScreen;
