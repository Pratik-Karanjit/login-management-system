import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { baseUrl } from '../../config/config';
import { getLoginInfo } from '../../utils/loginInfo';

const UpdateMyProfile = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  let [middleName, setMiddleName] = useState("");
  


  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");
  let [role, setRole] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let navigate = useNavigate();

  let roles = [
    { label: "select role", value: "", disabled: true },
    { label: "Admin", value: "admin" },
    { label: "Super Admin", value: "superAdmin" },
  ];
  let Genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let readData = async () => {
    try {
      let result = await axios({
        url:`${baseUrl}/admin/my-profile`,
        method:'get',
        headers:{
          Authorization: `Bearer ${getLoginInfo()?.token}`
        }
      });
      let _result=result.data.data
      setFirstName(_result.firstName)
      setLastName(_result.lastName)
      setMiddleName(_result.middleName)
      setDob(_result.dob)
      setGender(_result.gender)
      setRole(_result.role)
      setPhoneNumber(_result.phoneNumber)
      
      
    } catch (error) {
      // setData(null);
      console.log(error)
        // navigate('/admin/login')


    }
  };

  useEffect(() => {
    readData();
  }, [baseUrl]);

  let submit = async () => {
  
    try {
       let result=await axios({
        url: `${baseUrl}/admin/update-profile`,
        method: "patch",
        data: {
          firstName,
          lastName,
          middleName,
          dob,
          phoneNumber,
          gender,
          role
        },
        headers:{
          Authorization: `Bearer ${getLoginInfo()?.token}`
        }
      });
      console.log("created successfully");
      // console.log(result.data.data._id)
      // navigate(`/admin/${result.data.data._id}`);
      navigate(`/admin/my-profile}`);
      
    } catch (error) {
      console.log("Unable to Register");
    }
  };

  return (
    <div style={{ border: "2px solid lightblue", marginTop: "30px" }}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let info = {
            firstName,
            lastName,
            middleName,
            role,
            dob,
            phoneNumber,
            gender,
          };
          await submit(info);
        }}
      >
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your First name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="lastName">Lastname : </label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="middleName">Middlename: </label>
        <input
          id="middleName"
          type="text"
          placeholder="Enter your middleName"
          value={middleName}
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        ></input>
        <br></br>
        
        <label htmlFor="role">Role: </label>
        <select
          id="role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          {roles.map((item, i) => {
            return (
              <option key={i} value={item.value} disabled={item.disabled}>
                {item.label}
              </option>
            );
          })}
        </select>
        <br></br>
        <label htmlFor="dob">Date of Birth: </label>
        <input
          id="dob"
          type="date"
          placeholder="Enter your dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        ></input>
        <br></br>

        <label htmlFor="phoneNumber">Phonenumber: </label>
        <input
          id="phoneNumber"
          type="text"
          placeholder="Enter your phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        ></input>
        <br></br>
        <label>Gender: </label>
        {Genders.map((item, i) => {
          return (
            <div key={i}>
              <label htmlFor={item.value}>
                {item.label}
              </label>
              <input
                checked={gender === item.value}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                id={item.value}
                value={item.value}
              ></input>
            </div>
          );
        })}
        <br></br>

      
        <input
          type="submit"
          value="submit"
          style={{ cursor: "pointer" }}
        ></input>
      </form>
    </div>
  )
}

export default UpdateMyProfile