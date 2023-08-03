import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../../config/config'
import { getLoginInfo, removeLoginInfo } from '../../utils/loginInfo'
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {

    let [password, setPassword] = useState()
    let [oldPassword, setOldPassword] = useState()
    
    let navigate = useNavigate()
    let updatePassword = async() => {
    
    try {
        let result = await axios({
            url: `${baseUrl}/admin/update-password`,
            method: 'patch',
            data: {password,
                oldPassword
            },
            headers: {
                Authorization: `Bearer ${getLoginInfo()?.token}`,
            }
        })
        removeLoginInfo()
        navigate(`/admin/login`)
    } catch (error) {
        console.log("Unable to update password")
    }
    }
    

  return (
    <div>
   <form onSubmit={(e) => {
    e.preventDefault()
    updatePassword()
   }}>
    <br></br>
    <label htmlFor='oldpassword'>Old Password</label>
    <input id='oldpassword'
    type='password'
    value={oldPassword}
    onChange={(e) => {
        setOldPassword(e.target.value);
    }}
    ></input>
    <br></br>
    <label htmlFor='password'>Password</label>
    <input id='password'
    type='password'
    value={password}
    onChange={(e) => {
        setPassword(e.target.value);
    }}

    ></input>
    <br></br>
    <button type='submit'>Submit</button>
   </form>
   
   </div>
  )
}

export default UpdatePassword