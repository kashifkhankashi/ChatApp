import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";

function DrawerContent({ ...props }) {
  const [isDarkTheme, setIsDarkTheme] = useState("false");
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <View style={{ marginTop: "5%", flexDirection: "row" }}>
            <Avatar.Image source={require("../Images/emp1.jpg")} />
            <View style={{ marginLeft: 15 }}>
              <Title style={styles.title}>Kashif khan</Title>
              <Caption style={styles.caption}>kashi@gmail.com</Caption>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.section]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.section]}>
                670
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            onPress={() => props.navigation.navigate("HomeStackScreen")}
            label="Home"
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="bell-outline" color={color} size={size} />
            )}
            onPress={() => {
              props.navigation.navigate("DetailsStackScreen");
            }}
            label="Notification"
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="details" color={color} size={size} />
            )}
            onPress={() => {
              props.navigation.navigate("ExploreScreen");
            }}
            label="Detail"
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-circle-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate("ProfileScreen")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MIcon name="settings" color={color} size={size} />
            )}
            onPress={() => {
              props.navigation.navigate("Setting");
            }}
            label="Setting"
          />
        </Drawer.Section>
        <Drawer.Section title="Games">
          <View style={styles.preference}>
            <DrawerItem
              icon={({ color, size }) => (
                <MIcon name="games" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate("ScrambleWordGame");
              }}
              label="Scramble Word Game"
            />
          </View>
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents={"none"}>
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              onPress={() => {}}
            />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});

export default DrawerContent;
