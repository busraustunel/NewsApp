import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../assets/styles/styles";

const Card = ({ info, navigation }) => {
  const { title, imageUrl } = info;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          category: title.toLowerCase(),
        })
      }
    >
      <View style={styles.categoryCard}>
        <Text style={styles.textStyle}>{title}</Text>
        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
