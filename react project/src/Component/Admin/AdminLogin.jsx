import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginInfo } from "../../utils/loginInfo";

const AdminLogin = () => {
  let [email,setEmail]=useState("")
  let navigate=useNavigate()
  let [password,setPassword]=useState("")
  let onSubmit=async(info)=>{
    try{
      let result=await axios({
        url:`https://fake-api-nkzv.onrender.com/api/v1/admin/login`,
        method:'post',
        data:info,
      })

      // console.log(result.data.data)

      setLoginInfo(result.data.data)
    
      navigate("/admin")


     
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
      <label htmlFor="pass" >Password:</label>
      <input type='password' id='pass' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      <br></br>
      <br></br>
      <input type='submit' value='submit' style={{cursor:'pointer'}}></input>
      
      </form>
      <button onClick={()=>{
navigate("/admin/forgot-password")


      }}> Forgot Password </button>
    </div>

};

export default AdminLogin;
