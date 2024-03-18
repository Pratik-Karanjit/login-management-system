import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { getLoginInfo } from "../utils/loginInfo";
import { format } from "date-fns"; // Import the format function
import { parse } from "date-fns";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    fName: "",
    lName: "",
    dateOfBirth: "",
    role: "",
  });

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const result = await axios({
        url: "https://login-management-system.onrender.com/users/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`,
        },
      });
      // Use date-fns to format the date of birth to "dd/MM/yyyy" format
      const formattedDateOfBirth = format(
        new Date(result.data.result.dob),
        "dd/MM/yyyy"
      ); //package used
      // console.log(result.data.result.dob);
      // Set the initialValues directly to Formik using the setInitialValues function
      setInitialValues({
        fName: result.data.result.fName,
        lName: result.data.result.lName,
        dateOfBirth: formattedDateOfBirth,
        role: result.data.result.role,
      });
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  const handleSubmit = async (values) => {
    try {
      // Convert the date format to ISO format ("dd/MM/yyyy" to "yyyy-MM-dd'T'HH:mm:ss'Z'")
      const dateOfBirthISO = parse(
        values.dateOfBirth,
        "dd/MM/yyyy",
        new Date()
      ).toISOString();

      await axios({
        url: "https://login-management-system.onrender.com/users/update-my-profile",
        method: "patch",
        data: {
          fName: values.fName,
          lName: values.lName,
          dob: dateOfBirthISO, // Use the converted date format
          role: values.role,
        },
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`,
        },
      });
      console.log("Updated successfully");
      navigate("/my-profile");
    } catch (error) {
      console.log("Unable to update");
    }
  };

  return (
    <div style={{ border: "2px solid lightblue", marginTop: "30px" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <label htmlFor="fName">First name: </label>
          <Field type="text" id="fName" name="fName" />
          <ErrorMessage name="fName" component="div" />
          <br />

          <label htmlFor="lName">Last name: </label>
          <Field type="text" id="lName" name="lName" />
          <ErrorMessage name="lName" component="div" />
          <br />

          <label htmlFor="dateOfBirth">Date of Birth: </label>
          <Field type="text" id="dateOfBirth" name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="div" />
          <br />

          <label htmlFor="role">Role: </label>
          <Field type="text" id="role" name="role" />
          <ErrorMessage name="role" component="div" />
          <br />

          <button type="submit" style={{ cursor: "pointer" }}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateProfile;
