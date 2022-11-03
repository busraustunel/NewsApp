import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Repository from "../model/Repository";

const DetailsScreen = ({ route }) => {
  const { category } = route.params;
  const { data, loading, error } = Repository(category);
  if (loading) {
    return (
      <SafeAreaView>
        <View>
          <Text>loading</Text>
        </View>
      </SafeAreaView>
    );
  } else if (error) {
    return (
      <SafeAreaView>
        <View>
          <Text>Error</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <FlatList
          data={data.data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
};

export default DetailsScreen;
