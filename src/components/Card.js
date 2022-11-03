import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/styles";

const Card = ({ info, navigation }) => {
  const { title } = info;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          category: title.toLowerCase(),
        })
      }
    >
      <View style={styles.card}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
