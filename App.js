import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import styles from "./src/Styles";
import Home from "./src/Landing.js";
import Login from "./src/Login.js";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      {/* <Home /> */}
      <Login />
    </View>
  );
}
