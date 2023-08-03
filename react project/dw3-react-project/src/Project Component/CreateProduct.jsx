import { Formik, Form } from 'formik';
import * as yup from "yup"
import React from 'react'
import FormikInput from '../Formik/FormikInput'
import FormikSelect from '../Formik/FormikSelect';
import FormikCheckbox from '../Formik/FormikCheckbox';
import axios from 'axios';


//Things done in this page are: 
//1. Create Product form
//2. Hit api onSubmit


const CreateProduct = () => {
    let initialValues = {
       name: '',
       quantity: 0,
       price: 0,
       featured: false,
       productImage: "",
       manufactureDate: "",
       company: "apple",
     }
     
     let onSubmit = async(values, other)=> {
        try {
            let output = await axios({
                method: "post",
                url: "https://project-dw.onrender.com/api/vi/products",
                data: values,
            })
         }
         catch (error) {
            console.log(error.message)
        }
    }
     
     let validationSchema = yup.object({
       name:yup.string().required("Full Name is required. "),
       quantity:yup.number().required("Quantity is required. "),
       price:yup.number().required("Price is required. "),
       featured:yup.boolean(),
       productImage:yup.string().required("Product Image is required. "),
       manufactureDate:yup.string().required("manufacture Date is required. "),
       company:yup.string().required("Company is required. "),

    
     })

     let companyOptions = [
      {
          label: "Select Company",
          value: "",
          disabled: true,
      },
      {
          label: "Apple",
          value: "apple",
      },
      {
          label: "Samsung",
          value: "samsung",
      },
      {
          label: "Dell",
          value: "dell",
      },
      {
          label: "MI",
          value: "mi",
      },
  ]


  return (
    <div>
         <Formik 
        initialValues= {initialValues}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}>
            {
                (formik)=> {

         //for formik we need
         //name
         //label
         //type
         //onChange
         //required
         //option (radio, select) (array of object)   

                    return (
                   <Form>
                    <FormikInput
                        name = "name"
                        label = "Name"
                        type = "text"
                        required = {true}
                    ></FormikInput>


                    <FormikInput
                        name = "quantity"
                        label = "Quantity"
                        type = "number"
                        required = {true}
                    ></FormikInput>
                    <FormikInput
                        name = "price"
                        label = "Price"
                        type = "number"
                        required = {true}
                    ></FormikInput>


                <FormikCheckbox name = "featured" 
                label = "featured: ">
                </FormikCheckbox>
                    
                <FormikInput
                        name = "productImage"
                        label = "Product Image"
                        type = "text"
                        required = {true}
                    ></FormikInput>

                <FormikInput
                        name = "manufactureDate"
                        label = "Manufacture Date"
                        type = "date"
                        required = {true}
                    ></FormikInput>



              <FormikSelect name = "company" 
                label = "Company: " 
                required = {true}
                
                options = {companyOptions}
                >
                </FormikSelect>

                  <button type = "submit">Create Product</button>

                   </Form>
    )  }
            }
        </Formik>

    </div>
  )
}

export default CreateProduct