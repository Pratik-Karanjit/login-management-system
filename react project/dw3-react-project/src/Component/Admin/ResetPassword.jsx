import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setLoginInfo } from "../../utils/loginInfo";
import { baseUrl } from "../../config/config";

const ResetPassword= () => {
  let [password,setPassword]=useState("")
  let navigate=useNavigate()
  let [searchparams]=useSearchParams()
  
  let onSubmit=async(info)=>{
    try{
      let result=await axios({
        url:`${baseUrl}/admin/reset-password`,
        method:'post',
        data:{password},
        headers:{Authorization:`Bearer ${searchparams.get("token")}`}
      })
      navigate("/admin/login")
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
        
          password,
      

        }
        await onSubmit(info)
      }
    }>
    <br></br>
    <label htmlFor="password" >Password:</label>
      <input type='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      <br></br>
      <br></br>
      <button type='submit' value='submit' style={{cursor:'pointer'}}>Send</button>
      
      </form>

    </div>

};

export default ResetPassword
