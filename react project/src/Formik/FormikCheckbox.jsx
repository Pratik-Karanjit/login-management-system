import { Field } from 'formik'
import React from 'react'

const FormikCheckbox = ({name, label, onChange,required,...props}) => {
  return (
    <div><Field name = {name}>
    {
        ({field, form, meta}) => {

            onChange = !!onChange?onChange:field.onChange

            return (
                <div>
                     <label htmlFor={name}>
                      {label} {""} {required ?<span style={{color:"red"}}>*</span>:null}</label>
                    <input
                    {...field}
                    {...props}
                    type = "checkbox"
                    id = {name}
                    onChange = {onChange ? onChange : field.onChange}
                    checked = {meta.value}
                    ></input>
                    {meta.touched && meta.error ? (<div style= {{color:"red"}}>{meta.error}</div>):null}
                </div>
            )
        }
    }
    </Field></div>
  )
}

export default FormikCheckbox