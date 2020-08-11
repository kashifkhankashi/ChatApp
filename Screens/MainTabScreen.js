import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: false,
      headerRight: () => (
        <MaterialCommunityIcons.Button
          name="menu"
          backgroundColor="#009387"
          size={25}
          style={{ marginLeft: 10 }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
      headerTitle: "Home Screen",
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      title: "Notifications",
      headerLeft: false,
      headerRight: () => (
        <MaterialCommunityIcons.Button
          name="menu"
          backgroundColor="#123456"
          size={25}
          style={{ marginLeft: 10 }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
      headerStyle: {
        backgroundColor: "#123456",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="HomeStackScreen" activeColor="#fff">
    <Tab.Screen
      name="HomeStackScreen"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="DetailsStackScreen"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Details",
        tabBarColor: "#123456",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="information-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
