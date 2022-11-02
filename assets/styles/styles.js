import { StyleSheet } from "react-native";
import Dimensions from "./dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffaaff",
    width: Dimensions.width / 2 - 15,
    height: Dimensions.height / 8 - 15,
    borderRadius: 20,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 5,
    margin: 6,
  },
  detailsCard: {
    backgroundColor: "#ffaaff",
    width: Dimensions.width / 2 - 15,
    height: Dimensions.height / 2 - 15,
    borderRadius: 20,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 5,
    margin: 6,
  },

  textStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
    color: "#fff",
  },
});

export default styles;
