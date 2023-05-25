import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

const Profile = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [specialOffer, setSpecialOffer] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-lightgrey p-[5%]">
        <Text className="text-xl font-semibold">Personal Information</Text>
        <View className="items-center">
          <View className=" flex items-center p-5 relative">
            <Image
              source={require("../assets/Profile.png")}
              style={{ height: 200, width: 200 }}
              className="rounded-full"
            />
          </View>
          <TouchableOpacity className="absolute bottom-3">
            <View className="flex-row bg-white items-center p-1 pl-2 pr-2 rounded-2xl">
              <Ionicons name="camera" size={20} />
              <Text className="ml-1">変更する</Text>
              {/* <Text className="ml-1">{imageUri}</Text> */}
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-semibold text-black mb-[2%]">First name</Text>
          <TextInput className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"></TextInput>
          <Text className="font-semibold text-black mb-[2%]">Last name</Text>
          <TextInput className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"></TextInput>
          <Text className="font-semibold text-black mb-[2%]">Email</Text>
          <TextInput className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"></TextInput>
          <Text className="font-semibold text-black mb-[2%]">Phone number</Text>
          <TextInput className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"></TextInput>
        </View>
        <Text className="text-xl font-semibold mb-[5%]">
          Email notifications
        </Text>
        <View className="flex-row items-center m-[5%] gap-4">
          <Checkbox
            value={orderStatus}
            onValueChange={() => {
              setOrderStatus(!orderStatus);
            }}
          />
          <Text className="text-lg font-medium text-gray-700 ">
            Order statuses
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={passwordChange}
            onValueChange={() => {
              setPasswordChange(!passwordChange);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">
            Password changes
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={specialOffer}
            onValueChange={() => {
              setSpecialOffer(!specialOffer);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">
            Special offers
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={newsletter}
            onValueChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">Newsletter</Text>
        </View>

        <View className="mt-[10%] mb-[10%] rounded-xl bg-yellow border-peach border-2 p-4">
          <Text className="text-center font-bold text-lg">Log out</Text>
        </View>
        <View className="flex-row justify-center gap-5">
          <View className="border-gray-500 border-2 rounded-lg p-3 pl-5 pr-5">
            <Text className="text-gray-500 text-lg">Discard changes</Text>
          </View>
          <View className="bg-green border-gray-500 border-2 rounded-lg p-3 pl-5 pr-5">
            <Text className="text-white text-lg">Save changes</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
