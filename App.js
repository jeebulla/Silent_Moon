import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Landing.js";
import Login from "./src/Pages/Login.js";
import SignUp from "./src/Pages/SignUp.js";
import styles from "./src/Styles";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
