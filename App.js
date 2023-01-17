import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructrue";
import {useFonts as useLato,Lato_400Regular,} from '@expo-google-fonts/lato';
import {useFonts as useJua,Jua_400Regular,} from '@expo-google-fonts/jua';


export default function App() {
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  let [JuaLoaded] = useJua({
    Jua_400Regular,
  });

  if (!LatoLoaded||!JuaLoaded) {
    return null
  } 
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
