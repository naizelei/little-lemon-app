import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-gray-300">
      <View className="flex-1">
        <View className="flex justify-center items-center p-4">
          <Image
            source={require("../assets/Logo.png")}
            style={{ width: 200, height: 50 }}
          />
        </View>
        <View className="flex-1 p-[10%] bg-gray-400 items-center justify-between">
          <Text className="text-3xl text-gray-800">Let us get to know you</Text>
          <View className="w-full gap-5">
            <Text className="text-center text-3xl">First Name</Text>
            <TextInput className="rounded-lg border-2 border-black p-4"></TextInput>
            <Text className="text-center text-3xl">Email</Text>
            <TextInput className="rounded-lg border-2 border-black p-4"></TextInput>
          </View>
        </View>
        <View className="flex bottom-0 pb-[10%] pt-[10%] items-end pr-[10%]">
          <TouchableOpacity
            className=" bg-gray-400 w-1/3 rounded-lg p-3"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Text className="text-2xl text-center font-medium text-gray-700">
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
