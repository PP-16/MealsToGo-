import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructrue";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useJua, Jua_400Regular } from "@expo-google-fonts/jua";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Text } from "react-native";
import { RestaurantsContextProvider } from "./src/service/restaurants/restaurants.context";


const Tab = createBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions =({ route }) => ({
  headerShown: "",
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "purple",
  tabBarInactiveTintColor: "thistle",
})

export default function App() {
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  let [JuaLoaded] = useJua({
    Jua_400Regular,
  });

  if (!LatoLoaded || !JuaLoaded) {
    return null;
  }
 
  return (
    <>
      <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <ExpoStatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  );
}
