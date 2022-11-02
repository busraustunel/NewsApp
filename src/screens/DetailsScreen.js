import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../../assets/styles/styles";

const DetailsScreen = () => {
  return (
    <View style={styles.cardDetails}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default DetailsScreen;
