import { Field } from 'formik'
import React from 'react'

const FormikTextArea = ({name, label,type, onChange,required,...props}) => {
  return (
    <div><Field name = {name}>
    {
        ({field, form, meta}) => {

            onChange = !!onChange?onChange:field.onChange

            return (
                <div>
                    <label htmlFor={name}>
                      {label} {""} {required ?<span style={{color:"red"}}>*</span>:null}</label>
                    <textarea 
                    {...field}   
                    {...props}           //this must be written like a syntax
                            id = {name}
                           type = {type}
                           value = {meta.value}
                        //    onChange = {field.onChange}
                            onChange = {onChange}
                    ></textarea>
        {meta.touched && meta.error ? (<div style= {{color:"red"}}>{meta.error}</div>):null}
                </div>
            )
        }
    }
    </Field></div>
  )
}

export default FormikTextArea