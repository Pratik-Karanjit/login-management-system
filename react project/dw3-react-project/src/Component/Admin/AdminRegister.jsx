import React, { useState } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRegister = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  let [middleName, setMiddleName] = useState("");
  let [password, setPassword] = useState("");

  let [email, setEmail] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let [role, setRole] = useState("superAdmin");
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

  let Submit = async (info) => {
  
    try {
       let result=await axios({
        url: `${baseUrl}/admin/register`,
        method: "post",
        data: info,
      });
      console.log("created successfully");
      // console.log(result.data.data._id)
      navigate(`/admin/${result.data.data._id}`);
      // navigate(`/admin/my-profile}`);
    } catch (error) {
      
      toast.error(error.response.data.message || "Unable to register")
      console.log("Unable to Register");
    }
  };
  return (

    <div style={{ border: "2px solid lightblue", marginTop: "30px" }}>
      <ToastContainer/>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let info = {
            firstName,
            lastName,
            middleName,
            password,
            email,
            role,
            dob,
            phoneNumber,
            gender,
          };
          await Submit(info);
        }}
      >
        <label htmlFor="firstName">Firstname: </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your Firstname"
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
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
  );
};

export default AdminRegister;
