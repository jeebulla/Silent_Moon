import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("User email is required"),
});
export default SignInSchema;
