import React, { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../components/Card";
const array = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "National",
  },
  {
    id: 3,
    title: "Business",
  },
  {
    id: 4,
    title: "Sports",
  },
  {
    id: 5,
    title: "World",
  },
  {
    id: 6,
    title: "Politics",
  },
  {
    id: 7,
    title: "Technology",
  },
  {
    id: 8,
    title: "Startup",
  },
  {
    id: 9,
    title: "Entertainment",
  },
  {
    id: 10,
    title: "Miscellaneous",
  },
  {
    id: 11,
    title: "Hatke",
  },
  {
    id: 12,
    title: "Science",
  },
  {
    id: 13,
    title: "Automobile",
  },
];
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <FlatList
          data={array}
          renderItem={({ item }) => <Card info={item} />}
          keyExtractor={(array) => array.id.toString()}
          numColumns={2}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
