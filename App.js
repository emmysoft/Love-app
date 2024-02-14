import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import components
import MyLove from './components/MyLove';
import Letter from './components/Letter';
import Yes from './components/Yes';
import No from './components/No';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Dance': require("./assets/fonts/Dancing_Script/Dance.ttf")
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="My Love" component={MyLove} options={{ headerShown: false }} />
          <Stack.Screen name="Love Letter" component={Letter} options={{ headerShown: false }} />
          <Stack.Screen name="Yes" component={Yes} options={{ headerShown: false }} />
          <Stack.Screen name="No" component={No} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
