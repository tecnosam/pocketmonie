import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/auth/Login';

import { Mulish_400Regular, useFonts } from "@expo-google-fonts/mulish";
import SignupScreen from './screens/auth/Signup';

export default function App() {

  const [fontsLoaded] = useFonts({Mulish_400Regular})

  if (!fontsLoaded) {
      return null;
  }

  return (

    // <LoginScreen />
    <SignupScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
