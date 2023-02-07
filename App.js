import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructrue";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useJua, Jua_400Regular } from "@expo-google-fonts/jua";
import { RestaurantsContextProvider } from "./src/service/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/service/location/location.context";
import { AppNavigator } from "./src/infrastructrue/navigation/app.navigator";
import { FavouritesContextProvider } from "./src/service/favourites/favourites.context";
import { firebase } from "./firebaseConfig";
import { useEffect, useState } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase.auth
        .signInWithEmailAndPassword(
          firebase.getAuth,
          "User@email.com",
          "Test123"
        )
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
          console.log(error);
        });
    }, 2000);
  }, []);
  //#region pasa
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  let [JuaLoaded] = useJua({
    Jua_400Regular,
  });

  if (!LatoLoaded || !JuaLoaded) {
    return null;
  }
  //#endregion


  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <ExpoStatusBar style="auto" />
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
