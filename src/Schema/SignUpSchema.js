import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username too short!")
    .max(50, "Username too long!")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("User email is required"),

  password: Yup.string()
    .min(6, "password too short!")
    .max(50, "Password too long!")
    .matches(
      /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/,
      "Password must contain 8 characters, lowercase characters, uppercase letter, a number and one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string().oneOf([Yup.ref("password")]),
});

export default SignUpSchema;
