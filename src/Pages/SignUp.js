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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";
import SignUpSchema from "../Schema/SignUpSchema";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function SignIn({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwasd, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
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
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              if (checked) {
                Alert.alert(JSON.stringify(values));
              } else {
                Alert.alert("Please accept the terms and conditions");
              }
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
                    autoCapitalize="words"
                    autoCorrect={false}
                    style={styles.input}
                    placeholder="Username"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                  />
                  {touched.username && errors.username && (
                    <Ionicon
                      name="close"
                      size={20}
                      color="red"
                      style={styles.icon}
                    />
                  )}
                  {touched.username && !errors.username && (
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
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={values.password}
                    secureTextEntry={!showPassword}
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
                <View style={styles.privacyPolicyContainer}>
                  <Pressable style={styles.privacyPolicyText}>
                    <Text style={styles.existingAccountText}>
                      I have read the
                    </Text>
                    <Text style={styles.loginText}>Privace Policy</Text>
                  </Pressable>
                  <BouncyCheckbox
                    size={25}
                    fillColor="#7583CA"
                    unfillColor="#fff"
                    onPress={() => setChecked(!checked)}
                  />
                </View>
                <Pressable
                  style={styles.SocialBtnColored}
                  onPress={handleSubmit}
                >
                  <Text style={styles.SocialTextColored}>GET STARTED</Text>
                </Pressable>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
