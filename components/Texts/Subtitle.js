import { View, Text } from "react-native";
import React from "react";

const Subtitle = ({ title }) => {
  return (
    <View>
      <Text
        className="text-white text-[40px]"
        style={{ fontFamily: "MarkaziText-Regular" }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Subtitle;
