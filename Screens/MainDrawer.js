import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./MainTabScreen";
import DrawerContent from "./DrawerContent";
import SettingScreen from "./SettingScreen";
import ScrambleWordGame from "./ScrambleWordGame";

const Drawer = createDrawerNavigator();
const MainDrawer = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="ScrambleWordGame" component={ScrambleWordGame} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawer;
