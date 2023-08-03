import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from "yup"
import FormikInput from './FormikInput'
import FormikRadio from './FormikRadio'
import FormikSelect from './FormikSelect'
import FormikCheckbox from './FormikCheckbox'
import FormikTextArea from './FormikTextArea'


const FormikTutorial = () => {

  let initialValues = {
   fullName: "",
   email: "",
   password: "",
   gender: "male",
   country: "nepal",
   isMarried: false,
   description: "",
   phoneNumber: "",
   age: 0,
}

let onSubmit = (value, other)=> {
  console.log(value)
}

let validationSchema = yup.object({
  fullName:yup.string().required("Full Name is required. ")
  .min(5, "Name must be at least 5 characters.")
  .max(20, "Name must be at most 20 characters. ")
  .matches(/^[a-zA-Z ]*$/, "Only alphabets and space are allowed."),
  email: yup.string().required("Email is required. ")
  .matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, "Email is not valid."),
  password: yup.string().required("Password is required. ")
  .matches(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$"/,"Minimum eight and maximum 50 characters, at least one uppercase letter, one lowercase letter, one number and one special character."),
  gender: yup.string().required("Gender is required. "),
  country: yup.string().required("Country is required. "),
  isMarried: yup.boolean(),
  description: yup.string(),
  phoneNumber: yup.string().required("Phone Number is required. ")
  .min(10, "Must be at least 10 characters.")
  .max(10, "Must be at most 10 characters.")
  .matches(/^[0-9]*$/, "Phone number must be in numbers."),
  age: yup.number().required("Age is required. ").min(18, "Age must be over 18.")
})


let genderOptions = [
  {
      label: "Male",
      value: "male",
  },
  {
      label: "Female",
      value: "female",
  },
  {
      label: "Other",
      value: "other",
  },
]



let countryOptions = [
  {
      label: "Select Country",
      value: "",
      disabled: true,
  },
  {
      label: "Nepal",
      value: "nep",
  },
  {
      label: "India",
      value: "ind",
  },
  {
      label: "China",
      value: "chi",
  },
  {
      label: "Japan",
      value: "jap",
  },
  {
      label: "America",
      value: "ame",
  },
]

  return (
    <div>
      <div>
        <Formik 
        initialValues= {initialValues}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}>
            {
                (formik)=> {
                    return (
                    <Form>

<FormikInput name = "fullName" 
                label = "Full Name: " 
                type="text" 
                onChange={(e) => {
                formik.setFieldValue('fullName', e.target.value)
                }}
                placeholder = "Full Name"
                required = {true}
                ></FormikInput>


<FormikInput name = "email" 
                label = "Email: " 
                type="email" 
                onChange={(e) => {
                formik.setFieldValue('email', e.target.value)
                }}
                placeholder = "Email"
                required = {true}
                ></FormikInput>


<FormikInput name = "password" 
                label = "Password: " 
                type="password" 
                onChange={(e) => {
                formik.setFieldValue('password', e.target.value)
                }}
                placeholder = "Password"
                required = {true}
                ></FormikInput>

<FormikRadio name = "gender" 
                label = "Gender: " 
                onChange={(e) => {
                formik.setFieldValue('gender', e.target.value)
                }}
                
                required = {true}
                
                options = {genderOptions}
                >
                </FormikRadio>


                <FormikSelect name = "country" 
                label = "Country: " 
                onChange={(e) => {
                formik.setFieldValue('country', e.target.value)
                }}
                
                required = {true}
                
                options = {countryOptions}
                >
                </FormikSelect>


                <FormikCheckbox name = "isMarried" 
                label = "Is Married: " 
                onChange={(e) => {
                formik.setFieldValue('isMarried', e.target.checked)
                }}
                >
                </FormikCheckbox>



                <FormikTextArea name = "description" 
                label = "Description: " 
                type="text" 
                onChange={(e) => {
                formik.setFieldValue('description', e.target.value)
                }}
                
                required = {true}
                >

                </FormikTextArea>


                <FormikInput name = "phoneNumber"  
                label = "Phone Number: " 
                type="number" 
                onChange={(e) => {
                formik.setFieldValue('phoneNumber', e.target.value)
                }}
                required = {true}
                 ></FormikInput>


<FormikInput name = "age" 
                label = "Age: " 
                type="number" 
                onChange={(e) => {
                formik.setFieldValue('age', e.target.value)
                }}
                required = {true}
                 ></FormikInput>


                        <button type='submit'>Submit</button>
                    </Form>
    )  }
            }
        </Formik>

    </div>
    </div>
  )
}

export default FormikTutorial