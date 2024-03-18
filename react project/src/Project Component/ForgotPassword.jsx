import { Formik, Form } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import FormikInput from "../Formik/FormikInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const onSubmit = async (values) => {
    //The parameter values is used to pass data to the function
    //  when it's called. In this context, it likely represents some form of user input or data that
    // needs to be sent to the server.
    try {
      const response = await axios.get(
        "https://login-management-system.onrender.com/users/forgot-password",
        { params: values }
      );

      // console.log(response.data);
      navigate("/forgot-password-verification");
    } catch (error) {
      console.log("Unable to submit:", error);
    }
  };

  const validationSchema = yup.object({
    email: yup.string().required("Email is required. "),
  });

  return (
    <div className="form-container">
      <h1 className="form-title">Forgot Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikInput
              name="email" // Make sure this matches the field name in the backend
              label="Email: "
              type="email"
              required={true}
              className="form-input"
            />

            <button type="submit" className="form-button">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
