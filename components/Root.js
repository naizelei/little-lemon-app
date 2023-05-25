import { View, Text, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./Onboarding";
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeftLabelVisible: false,
          headerTitle: () => (
            <Image
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
              source={require("../assets/Logo.png")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Root;
