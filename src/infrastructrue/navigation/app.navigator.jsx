import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text, Button, View } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../service/restaurants/restaurants.context";
import { LocationContextProvider } from "../../service/location/location.context";
import { FavouritesContextProvider } from "../../service/favourites/favourites.context";
const Tab = createBottomTabNavigator();
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <View style={{ margin: 20 }}>
        <Button title="logout" onPress={() => onLogout()} />
      </View>
    </SafeArea>
  );
};

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => ({
  headerShown: "",
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "purple",
  tabBarInactiveTintColor: "thistle",
});

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions} headerMode="none">
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
