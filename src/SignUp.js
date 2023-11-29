import React from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Noodles from "../assets/noodles.svg";
import BackArrow from "../assets/back-arrow.svg";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import styles from "./Styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignIn({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        KeyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.loginScreen}>
          <Noodles style={styles.noodles} />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <BackArrow style={styles.backArrow} />
          </Pressable>
          <Text style={styles.welcome}>Create your account </Text>
          <Pressable style={styles.SocialBtnColored}>
            <Facebook style={styles.SocialIcon} />
            <Text style={styles.SocialTextColored}>CONTINUE WITH FACEBOOK</Text>
          </Pressable>
          <Pressable style={styles.SocialBtnTransparent}>
            <Google style={styles.SocialIcon} />
            <Text style={styles.SocialTextTransparent}>
              CONTINUE WITH GOOGLE
            </Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.orText}>OR LOG IN WITH EMAIL</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Email address" />
          <TextInput style={styles.input} placeholder="Password" />
          <View style={styles.privacyPolicyContainer}>
            <Pressable style={styles.privacyPolicyText}>
              <Text style={styles.existingAccountText}>I have read the</Text>
              <Text style={styles.loginText}>Privace Policy</Text>
            </Pressable>
            <BouncyCheckbox
              size={25}
              fillColor="#7583CA"
              unfillColor="#FFFFFF"
            />
          </View>
          <Pressable style={styles.SocialBtnColored}>
            <Text style={styles.SocialTextColored}>GET STARTED</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
