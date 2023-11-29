import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  Button,
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

export default function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView KeyboardDismissMode="on-drag">
        <View style={styles.loginScreen}>
          <Noodles style={styles.noodles} />
          <Pressable>
            <BackArrow style={styles.backArrow} />
          </Pressable>
          <Text style={styles.welcome}>Welcome Back!</Text>
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
          <TextInput style={styles.input} placeholder="Email address" />
          <TextInput style={styles.input} placeholder="Password" />
          <Pressable style={styles.SocialBtnColored}>
            <Text style={styles.SocialTextColored}>LOG IN</Text>
          </Pressable>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <View style={styles.loginRedirectContainer}>
            <Text style={styles.existingAccountText}>
              ALREADY HAVE AN ACCOUNT?
            </Text>
            <Pressable>
              <Text style={styles.loginText}>SIGN UP</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
