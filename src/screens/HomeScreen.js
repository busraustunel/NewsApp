import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import Card from "../components/Card";
import categoryArray from "../utils/constants";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ marginTop: 10 }}
        data={categoryArray}
        renderItem={({ item }) => <Card info={item} navigation={navigation} />}
        keyExtractor={(array) => array.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
