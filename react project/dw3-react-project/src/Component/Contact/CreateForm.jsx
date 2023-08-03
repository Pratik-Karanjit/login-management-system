import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  let [fullName, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phoneNumber, setPhone] = useState("");
  let [email, setEmail] = useState("");

  let navigate = useNavigate();

  let onSubmit = async (info) => {
    try {
      let result = await axios({
        url: `${baseUrl}/contacts`,
        method: "post",
        data: info,
      });

      // console.log("created successfully");
      navigate(`/contacts/${result.data.data._id}`);
    } catch (error) {
      console.log("unable to create");
    }
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        let info = {
          fullName: fullName,
          address: address,
          phoneNumber: phoneNumber,
          email: email,
        };

        await onSubmit(info);
      }}
    >
      <label htmlFor="fullName">Full Name: </label>
      <input
        id="fullName"
        type="text"
        placeholder="Enter your fullName"
        value={fullName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br></br>

      <label htmlFor="address">address: </label>
      <input
        id="address"
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      ></input>
      <br></br>
      <label htmlFor="phoneNumber">phoneNumber : </label>
      <input
        id="phoneNumber"
        type="number"
        placeholder="Enter your phoneNumber number"
        value={phoneNumber}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <br></br>
      <label htmlFor="email">email: </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <br></br>

      <button style={{ cursor: "pointer" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
