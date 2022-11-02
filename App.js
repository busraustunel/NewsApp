import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./assets/styles/styles.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import Navigation from "./src/navigations/Navigation.js";

function App() {
  return <Navigation />;
}
AppRegistry.registerComponent("main", () => App);

export default App;
