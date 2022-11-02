import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../../assets/styles/styles";

const Card = ({ info }) => {
  const { name, title } = info;
  return (
    <View style={styles.card}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default Card;
