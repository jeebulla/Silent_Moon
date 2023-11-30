import React from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import Noodles from "../../assets/noodles.svg";
import BackArrow from "../../assets/back-arrow.svg";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import styles from "../Styles";
import { Formik } from "formik";
import SignInSchema from "../Schema/SignInSchema";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [passwasd, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
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
          <Pressable onPress={() => navigation.navigate("Home")}>
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
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              Alert.alert("Login Successful " + JSON.stringify(values.email));
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              touched,
              setFieldTouched,
              isValid,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                  />
                  {touched.email && errors.email && (
                    <Ionicon
                      name="close"
                      size={20}
                      color="red"
                      style={styles.icon}
                    />
                  )}
                  {touched.email && !errors.email && (
                    <Ionicon
                      name="checkmark"
                      size={20}
                      color="green"
                      style={styles.icon}
                    />
                  )}
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                  />
                  <Ionicon
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="black"
                    style={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                  {touched.password && errors.password && (
                    <View style={styles.errorContainer}>
                      <Text style={styles.errorText}>{errors.password}</Text>
                    </View>
                  )}
                </View>
                <Pressable
                  style={styles.SocialBtnColored}
                  onPress={handleSubmit}
                >
                  <Text style={styles.SocialTextColored}>LOG IN</Text>
                </Pressable>

                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <View style={styles.loginRedirectContainer}>
                  <Text style={styles.existingAccountText}>
                    ALREADY HAVE AN ACCOUNT?
                  </Text>
                  <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.loginText}>SIGN UP</Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
