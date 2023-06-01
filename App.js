import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./components/Root";

import * as Font from "expo-font";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      "MarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
    });
  });
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
