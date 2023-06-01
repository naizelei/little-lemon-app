import { View, Text } from "react-native";
import React from "react";

const DisplayTitle = ({ title }) => {
  return (
    <View>
      <Text
        className="text-[64px] text-yellow font-medium"
        style={{ fontFamily: "MarkaziText-Regular" }}
      >
        {title}
      </Text>
    </View>
  );
};

export default DisplayTitle;
