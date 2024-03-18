import { Field } from 'formik'
import React from 'react'

const FormikRadio = ({name, label, onChange,required,options,...props}) => {
  return (
    <div><Field name = {name}>
    {
        ({field, form, meta}) => {

            onChange = !!onChange?onChange:field.onChange

            return (
            <div>
                 <label htmlFor={name}>
                      {label} {""} {required ?<span style={{color:"red"}}>*</span>:null}</label>
            <br></br>

            {options.map((item,i) => {
                return (
                        <div key = {i}>
                        <label htmlFor = {item.value}>{item.label}</label>
                        <input
                        {...field}
                        {...props}
                        id = {item.value}
                        type = "radio"
                        value = {item.value}
                        onChange = {onChange ? onChange : field.onChange}
                        checked = {meta.value === item.value}

                        ></input>
                        </div>
                )
            })}
            </div>
            )
        }
    }
    </Field></div>
  )
}

export default FormikRadio