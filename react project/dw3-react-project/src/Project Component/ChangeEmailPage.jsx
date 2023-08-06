import { Formik, Form } from 'formik';
import * as yup from 'yup';
import React from 'react';
import FormikInput from '../Formik/FormikInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getLoginInfo } from '../utils/loginInfo';

const ChangeEmailPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.patch(`http://localhost:8000/users/change-email-page?token=${getLoginInfo()?.token}`, values);

      // console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.log('Unable to submit:', error);
    } 
  };

  const validationSchema = yup.object({
    email: yup.string().required('New Email is required. '),
  });

  return (
      <div className="form-container">
        <h1 className="form-title">Change Email</h1>
        <p>Enter the email you want to change to.
        </p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form>
            <FormikInput
                name="email"  // Make sure this matches the field name in the backend
                label="New Email: "
                type="email"
                required={true}
                className="form-input"
              />
           
            <button type="submit"className="form-button">
              Change Email
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmailPage;


