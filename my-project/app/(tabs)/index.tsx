import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../../components/HomePage.jsx'
import Registration from '../../components/Registration'


import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const Tab=createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator 
    screenOptions={{
      headerShown: false, // Masque l'en-tête de chaque écran
    }}>
    <Tab.Screen name = "Home Page" component={HomePage} />
    <Tab.Screen name = "Registration" component={Registration} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
  