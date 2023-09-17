import {useCallback} from 'react';
import { View } from "react-native";
import Route from "./src/routers";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () =>{

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Mukta-Bold": require("./assets/fonts/Mukta-Bold.ttf"),
    "Mukta-Regular": require("./assets/fonts/Mukta-Regular.ttf"),
    "Mukta-SemiBold": require("./assets/fonts/Mukta-SemiBold.ttf"),
    "Mukta-Medium": require("./assets/fonts/Mukta-Medium.ttf"),
    "Mukta-ExtraBold": require("./assets/fonts/Mukta-ExtraBold.ttf"),
   
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <View onLayout={onLayoutRootView} style={{flex:1}}><Route /></View>
}

export default App


