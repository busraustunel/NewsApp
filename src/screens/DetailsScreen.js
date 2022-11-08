import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../assets/styles/styles";
import Repository from "../model/Repository";
import ProgressBar from "react-native-animated-progress";

const DetailsScreen = ({ route }) => {
  const { category } = route.params;
  const { data, loading, error } = Repository(category);
  if (loading) {
    return (
      <SafeAreaView>
        <View>
          <ProgressBar height={10} indeterminate backgroundColor="#000" />
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
      <FlatList
        data={data.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.url);
            }}
          >
            <View style={styles.detailsCard}>
              <Text style={styles.title}>{item.title}</Text>
              <Image
                style={styles.image}
                source={{ uri: item.imageUrl }}
              ></Image>
              <Text style={styles.detailsTextStyle}>{item.content}</Text>
              <View style={styles.dateRowStyle}>
                <Text style={styles.dateStyle}>{item.date}</Text>
                <Text style={styles.dateStyle}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
};

export default DetailsScreen;
