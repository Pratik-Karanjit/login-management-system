import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginInfo } from "../../utils/loginInfo";
import { baseUrl } from "../../config/config";

const ForgotPassword= () => {
  let [email,setEmail]=useState("")
  let navigate=useNavigate()
  let onSubmit=async(info)=>{
    try{
      let result=await axios({
        url:`${baseUrl}/admin/forgot-password`,
        method:'post',
        data:info,
      })
    }
    catch(error)
    {
      console.log("unable to submit")
    }
  }
  return <div style={{border:"2px solid blue",marginTop:'20px'}}>
    <form onSubmit={
      async (e)=>{
        e.preventDefault();
        let info={
        
          email,
      

        }
        await onSubmit(info)
      }
    }>
    <br></br>
    <label htmlFor="email" >Email:</label>
      <input type='text' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <br></br>
      <br></br>
      <button type='submit' value='submit' style={{cursor:'pointer'}}>Send</button>
      
      </form>

    </div>

};

export default ForgotPassword
