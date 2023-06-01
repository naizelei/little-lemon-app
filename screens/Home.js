import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DisplayTitle from "../components/Texts/DisplayTitle";
import Subtitle from "../components/Texts/Subtitle";
import LeadText from "../components/Texts/LeadText";

const DATA = [
  {
    id: 1,
    title: "Lunch",
  },
  {
    id: 2,
    title: "Mains",
  },
  {
    id: 3,
    title: "Desserts",
  },
  {
    id: 4,
    title: "A La Carte",
  },
  {
    id: 5,
    title: "Specials",
  },
];
const Home = () => {
  const layout = useWindowDimensions();
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const BedItem = ({ title, id, i, isSelected }) => {
    const handleSelectCaegory = (i) => {
      if (selectedCategoryItem && selectedCategoryItem.id === i) {
        // Item is already selected, deselect it
        setSelectedCategoryItem(null);
      } else {
        // Item is not selected, select it
        setSelectedCategoryItem(i);
      }
    };
    return (
      <TouchableOpacity
        className={
          selectedCategoryItem == i
            ? " mb-3 rounded-3xl p-2 pr-5 pl-5 bg-green items-center "
            : " mb-3 rounded-3xl bg-lightgrey p-2 pr-5 pl-5  "
        }
        onPress={() => handleSelectCaegory(i)}
      >
        <Text
          className={
            selectedCategoryItem == i
              ? "text-base text-center text-white font-bold"
              : "text-base text-center text-green font-bold"
          }
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View
          className="flex-1 bg-green p-4"
          style={{ height: layout.height * 0.35 }}
        >
          <DisplayTitle title="Little Lemon" />
          <Subtitle title="Chicago" />
          <View className="w-2/3">
            <LeadText title="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
          </View>
          <View className="bg-yellow rounded-2xl w-[40%] p-2 mt-[8%] ">
            <Text className="font-bold text-base text-center">
              Reserve a table
            </Text>
          </View>
        </View>
        <View className="flex-1 bg-white">
          <Text className="text-[20px] font-extrabold p-4">
            ORDER FOR DELIVERY!
          </Text>
          <View className="border-b-2 border-lightgrey">
            <FlatList
              data={DATA}
              renderItem={({ item, index }) => (
                <BedItem
                  title={item.title}
                  id={item.id}
                  i={index}
                  isSelected={item.isSelected}
                />
              )}
              keyExtractor={(item) => item.id}
              className="ml-5"
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
