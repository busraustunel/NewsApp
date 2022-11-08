import { StyleSheet } from "react-native";
import Dimensions from "./dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryCard: {
    backgroundColor: "#fafafa",
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
    flexDirection: "column",
    backgroundColor: "#fafafa",
    width: Dimensions.width,
    marginVertical: 20,
    height: Dimensions.height / 1.4,
    borderRadius: 30,
    elevation: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  image: {
    width: Dimensions.width - 20,
    height: Dimensions.height / 2 - 200,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: Dimensions.width / 20,
    padding: 20,
    fontWeight: "bold",
    color: "#000",
  },
  dateStyle: {
    fontSize: Dimensions.width / 24,
    marginTop: 10,
    color: "#000",
  },

  textStyle: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "#000",
  },

  dateRowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 5,
  },

  progressBar: {
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  detailsTextStyle: {
    fontSize: Dimensions.width / 24,
    padding: 5,
    color: "#000",
  },
});

export default styles;
