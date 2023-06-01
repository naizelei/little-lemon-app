import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Onboarding = () => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loaded] = useFonts({
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
    "Karla-Medium": require("../assets/fonts/Karla-Medium.ttf"),
    "Karla-Bold": require("../assets/fonts/Karla-Bold.ttf"),
    "Karla-ExtraBold": require("../assets/fonts/Karla-ExtraBold.ttf"),
    "MarkaziText-Regular": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "MarkaziText-Medium": require("../assets/fonts/MarkaziText-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const checkFormFilled = () => {
    if (firstname.trim() !== "" && email.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-300">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <View className="flex justify-center items-center p-4">
          <Image
            source={require("../assets/Logo.png")}
            style={{ width: 200, height: 50 }}
          />
        </View>
        <View className="flex-1 p-[10%] justify-between bg-gray-400 items-center">
          <Text className="text-[32px] text-gray-800">
            Let us get to know you
          </Text>
          <View className="w-full gap-5">
            <Text className="text-center text-3xl">First Name</Text>
            <TextInput
              className="rounded-lg border-b-2 border-black p-4 text-center"
              value={firstname}
              onChangeText={(text) => {
                setFirstname(text);
                checkFormFilled();
              }}
            ></TextInput>
            <Text className="text-center text-3xl mt-[5%]">Email</Text>
            <TextInput
              className="rounded-lg border-b-2 border-black p-4 text-center"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                checkFormFilled();
              }}
              keyboardType="email-address"
            ></TextInput>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View className="bottom-0 justify-end items-end p-[10%]">
        <TouchableOpacity
          className={
            disabled
              ? " bg-gray-400 w-1/3 rounded-lg p-3"
              : " bg-gray-500 w-1/3 rounded-lg p-3"
          }
          disabled={disabled}
          onPress={() => {
            navigation.navigate("Profile", { firstname, email });
          }}
        >
          <Text className="text-2xl text-center font-medium text-gray-700">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
