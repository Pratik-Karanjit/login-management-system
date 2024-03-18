import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  let params = useParams(); //{id:"1234123424"}

  let [fullName, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phoneNumber, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  let onSubmit = async (info) => {
    try {
      await axios({
        url: `${baseUrl}/contacts/${params.id}`,
        method: "patch",
        data: info,
      });
      // console.log("updated successfully");
      navigate(`/contacts/${params.id}`);
    } catch (error) {
      console.log("unable to update");
    }
  };

  useEffect(() => {
    let fetchData = async () => {
      let result = await axios({
        url: `${baseUrl}/contacts/${params.id}`,
      });

      let _result = result.data.data;

      setName(_result.fullName);
      setEmail(_result.email);
      setAddress(_result.address);
      setPhone(_result.phoneNumber);
    };

    fetchData();
  }, [params.id, baseUrl]);
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

        onSubmit(info);
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

export default UpdateForm;
