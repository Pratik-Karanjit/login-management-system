import { Formik, Form } from "formik";
import * as yup from "yup";
import React from "react";
import FormikInput from "../Formik/FormikInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPasswordReset = () => {
  const navigate = useNavigate();

  const initialValues = {
    NewPassword: "",
    password: "",
  };

  const onSubmit = async (values) => {
    //The parameter values is used to pass data to the function
    //  when it's called. In this context, it likely represents some form of user input or data that
    // needs to be sent to the server.
    try {
      console.log("button clicked....");

      // Get the token from the query parameters in the URL
      const urlParams = new URLSearchParams(window.location.search); // the URLSearchParams API is used to extract the token parameter from the query string of the current URL.
      const token = urlParams.get("token"); //The token is retrieved using urlParams.get('token').

      // Include the token as a query parameter in the request URL
      const response = await axios.patch(
        `https://login-management-system.onrender.com/users/reset-password?token=${token}`,
        values
      );
      // console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log("Unable to submit:", error);
    }
  };

  const validationSchema = yup.object({
    NewPassword: yup.string().required("Password is required. "),
    password: yup
      .string()
      .required("Confirm Password is required. ")
      .oneOf(
        [yup.ref("NewPassword")],
        "Your new password and confirm password must match."
      ),
  });

  return (
    <div className="form-container">
      <h1 className="form-title">Reset Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikInput
              name="NewPassword"
              label="New Password:"
              type="password"
              required={true}
              className="form-input"
            />
            <FormikInput
              name="password"
              label="Confirm Password:"
              type="password"
              required={true}
              className="form-input"
            />
            <button type="submit" className="form-button">
              Change Password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordReset;
