import { StyleSheet, Dimensions } from "react-native";
const { width, height, fontScale } = Dimensions.get("window");
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  backdrop: {
    position: "absolute",
    top: -35,
  },
  homeContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  landing: {
    alignItems: "center",
    position: "relative",
  },
  logo: {
    marginBottom: "20%",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 15,
    width: "80%",
  },
  welcomeHeader: {
    fontSize: fontScale * 25,
    fontWeight: "bold",
    color: "#555",
  },
  welcomeText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: fontScale * 17,
    color: "#444",
  },
  signUpBtn: {
    backgroundColor: "#7583CA",
    padding: 20,
    width: width * 0.8,
    borderRadius: 20,
    marginVertical: 5,
  },
  signUpText: {
    color: "#fff",
    textAlign: "center",
  },
  redirectCoontainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    color: "#444",
    marginTop: 20,
  },
  existingAccountText: {
    fontSize: fontScale * 13,
  },
  loginText: {
    textAlign: "center",
    color: "#7583CA",
    fontWeight: "bold",
    fontSize: fontScale * 13,
  },
  //   Login Screen Styles
  loginScreen: {
    position: "relative",
  },
  backArrow: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  noodles: {
    position: "absolute",
  },
  welcome: {
    fontSize: fontScale * 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#444",
    marginTop: "30%",
    marginBottom: "5%",
  },
  SocialBtnColored: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    alignSelf: "center",
    backgroundColor: "#7583CA",
    padding: 20,
    width: width * 0.8,
    borderRadius: 30,
    marginVertical: 10,
  },
  SocialBtnTransparent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    alignSelf: "center",
    backgroundColor: "transparent",
    padding: 20,
    width: width * 0.8,
    borderWidth: 0.5,
    borderColor: "#7583CA",
    borderRadius: 30,
    marginVertical: 10,
  },
  SocialTextColored: {
    color: "#fff",
    fontSize: fontScale * 15,
    textAlign: "center",
  },
  SocialTextTransparent: {
    color: "#555",
    fontSize: fontScale * 15,
    textAlign: "center",
  },
  orText: {
    color: "#888",
    fontSize: fontScale * 13,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    alignSelf: "center",
    backgroundColor: "#eee",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: width * 0.85,
    position: "relative",
  },
  forgotPassword: {
    textAlign: "center",
    color: "#888",
    marginTop: 10,
  },
  loginRedirectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    color: "#444",
    marginTop: 40,
  },
  privacyPolicyContainer: {
    width: width * 0.8,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    gap: 5,
    color: "#444",
  },
  privacyPolicyText: {
    flexDirection: "row",
    gap: 5,
    color: "#888",
  },
  inputContainer: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 50,
    top: 28,
  },
  errorContainer: {
    width: width * 0.9,
    alignSelf: "center",
  },
  errorText: {
    textAlign: "center",
    color: "red",
  },
});
