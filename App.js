import { Manrope_400Regular, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { StackNavigator } from './Framework/Navigation/Stack';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './Framework/Components/GlobalVariables';
import {
  Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium,
  Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold, Poppins_700Bold_Italic
} from '@expo-google-fonts/poppins';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Poppins_400Regular });
        await Font.loadAsync({ Poppins_400Regular_Italic });
        await Font.loadAsync({ Poppins_500Medium });
        await Font.loadAsync({ Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold, Poppins_700Bold_Italic });
        await Font.loadAsync({ Manrope_400Regular });
        await Font.loadAsync({ Manrope_700Bold });
        await Font.loadAsync({ Manrope_800ExtraBold });
        await Font.loadAsync({ Pacifico_400Regular });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
