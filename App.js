import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import MainTabScreen from "./Screens/MainTabScreen";
// import DrawerContent from "./Screens/DrawerContent";
// import SettingScreen from "./Screens/SettingScreen";
import RootStackScreen from "./Screens/RootStackScreen";

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
