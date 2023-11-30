import { Text, View, Pressable, SafeAreaView } from "react-native";
import Backdrop from "../../assets/Frame.svg";
import Welcome from "../../assets/welcome.svg";
import Logo from "../../assets/logo.svg";
import styles from "../Styles";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Backdrop style={styles.backdrop} />
      <View style={styles.landing}>
        <Logo style={styles.logo} />
        <Welcome />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeHeader}>We are what we do</Text>
        <Text style={styles.welcomeText}>
          Thousand of people are using silent moon for smalls meditation
        </Text>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpBtn}
        >
          <Text style={styles.signUpText}>SIGN UP</Text>
        </Pressable>
        <View style={styles.redirectCoontainer}>
          <Text style={styles.existingAccountText}>
            ALREADY HAVE AN ACCOUNT?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>SIGN IN</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
