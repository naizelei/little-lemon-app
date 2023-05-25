import { View, Text } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View className="flex items-center">
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={{ width: 250, height: 250 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
