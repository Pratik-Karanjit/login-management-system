import { Formik, Form } from "formik";
import * as yup from "yup";
import React from "react";
import FormikInput from "../Formik/FormikInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getLoginInfo } from "../utils/loginInfo";

const ChangeEmail = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.patch(
        `https://login-management-system.onrender.com/users/change-email?token=${
          getLoginInfo()?.token
        }`,
        values
      );

      // console.log(response.data);
      navigate("/change-email-verification");
    } catch (error) {
      console.log("Unable to submit:", error);
    }
  };

  const validationSchema = yup.object({
    email: yup.string().required("Current Email is required. "),
  });

  return (
    <div className="form-container">
      <h1 className="form-title">Change Email</h1>
      <p>
        Before changing your email, we need to verify your email. A verification
        will be sent to your current email.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikInput
              name="email" // Make sure this matches the field name in the backend
              label="Current Email: "
              type="email"
              required={true}
              className="form-input"
            />

            <button type="submit" className="form-button">
              Send Verification
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmail;
