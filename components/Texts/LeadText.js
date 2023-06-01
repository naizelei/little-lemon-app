import { View, Text } from "react-native";
import React from "react";

const LeadText = ({ title }) => {
  return (
    <View>
      <Text
        className="text-white text-[18px] font-medium"
        style={{ fontFamily: "Karla-Regular" }}
      >
        {title}
      </Text>
    </View>
  );
};

export default LeadText;
