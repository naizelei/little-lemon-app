import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "../contexts/Auth";
const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { firstname: passedFirstname, email: passedEmail } = route.params;
  const [profile, setProfile] = useState({
    firstName: passedFirstname,
    lastName: "",
    email: passedEmail,
    phone: "",
    profileImage: "",
    orderStatus: false,
    passwordChange: false,
    specialOffer: false,
    newsletter: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [errorVisible, setErrorVisible] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });
  // const { update } = useContext(Auth);
  const updateProfile = (key, value) => {
    setProfile((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const checkFormFilled = () => {
    if (
      profile.firstName.trim() !== "" &&
      profile.email.trim() !== "" &&
      profile.lastName !== "" &&
      profile.phone !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const validateFirstname = (name) => {
    if (name.length > 0) {
      return name.match(/[^a-zA-Z]/);
    } else {
      setErrorVisible((prevState) => ({
        ...prevState,
        firstName: true,
      }));
    }
  };

  const validateNumber = (number) => {
    if (number < 10) {
      setErrorVisible((prevState) => ({
        ...prevState,
        phone: true,
      }));
    } else {
      return true;
    }
  };
  console.log(errorVisible.phone);
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
          <View className="flex-row">
            <Text className="font-semibold text-black mb-[2%]">First name</Text>
            {errorVisible.firstName && (
              <Text className="text-red-400 ml-[5%]">
                Please input correct name.
              </Text>
            )}
          </View>
          <TextInput
            className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"
            value={profile.firstName}
            onChangeText={(text) => {
              updateProfile("firstName", text);
              checkFormFilled();
              validateFirstname(text);
            }}
          ></TextInput>

          <View className="flex-row">
            <Text className="font-semibold text-black mb-[2%]">Last name</Text>
            {errorVisible.lastName && (
              <Text className="text-red-400 ml-[5%]">
                Please input correct name.
              </Text>
            )}
          </View>
          <TextInput
            className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"
            value={profile.lastName}
            onChangeText={(text) => {
              updateProfile("lastName", text);
              checkFormFilled();
            }}
          ></TextInput>
          <View className="flex-row">
            <Text className="font-semibold text-black mb-[2%]">Email</Text>
            {errorVisible.email && (
              <Text className="text-red-400 ml-[5%]">Invalid email.</Text>
            )}
          </View>
          <TextInput
            className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"
            value={profile.email}
            onChangeText={(text) => {
              updateProfile("email", text);
              checkFormFilled();
            }}
          ></TextInput>
          <View className="flex-row">
            <Text className="font-semibold text-black mb-[2%]">Phone</Text>
            {errorVisible.phone && (
              <Text className="text-red-400 ml-[5%]">
                Invalid phone number.
              </Text>
            )}
          </View>
          <TextInput
            className="rounded-lg border-2 border-gray-300 p-4 mb-[5%]"
            value={profile.phone}
            onChangeText={(text) => {
              updateProfile("phone", text);
              checkFormFilled();
              validateNumber(text);
            }}
            keyboardType="numeric"
            maxLength={10}
          ></TextInput>
        </View>
        <Text className="text-xl font-semibold mb-[5%]">
          Email notifications
        </Text>
        <View className="flex-row items-center m-[5%] gap-4">
          <Checkbox
            value={profile.orderStatus}
            onValueChange={(text) => {
              updateProfile("orderStatus", text);
            }}
          />
          <Text className="text-lg font-medium text-gray-700 ">
            Order statuses
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={profile.passwordChange}
            onValueChange={(text) => {
              updateProfile("passwordChange", text);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">
            Password changes
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={profile.specialOffer}
            onValueChange={(text) => {
              updateProfile("specialOffer", text);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">
            Special offers
          </Text>
        </View>
        <View className="flex-row items-center ml-[5%] mb-[5%] gap-4">
          <Checkbox
            value={profile.newsletter}
            onValueChange={(text) => {
              updateProfile("newsletter", text);
            }}
          />
          <Text className="text-lg font-medium text-gray-700">Newsletter</Text>
        </View>

        <View className="mt-[10%] mb-[10%] rounded-xl bg-yellow border-peach border-2 p-4">
          <Text className="text-center font-bold text-lg">Log out</Text>
        </View>
        <View className="flex-row justify-center gap-5 mb-[10%]">
          <TouchableOpacity className="border-gray-500 border-2 rounded-lg p-3 pl-5 pr-5">
            <Text className="text-gray-500 text-lg">Discard changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-green border-gray-500 border-2 rounded-lg p-3 pl-5 pr-5"
            disabled={disabled}
            onPress={() => {
              console.log(disabled);
            }}
          >
            <Text className="text-white text-lg">Save changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
