import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const UpdateHousesForm = () => {
  let params = useParams(); //{id:"1234123424"}

  let [address, setAddress] = useState("");
  let [bedrooms, setBedrooms] = useState("");
  let [bathrooms, setBathrooms] = useState("");
  let [price, setPrice] = useState("");
  let [hasGarden, setHasGarden] = useState(false);
  let navigate = useNavigate();

  let onSubmit = async (info) => {
    try {
      await axios({
        url: `${baseUrl}/houses/${params.id}`,
        method: "patch",
        data: info,
      });
      console.log("updated successfully");
      navigate(`/houses/${params.id}`);
    } catch (error) {
      console.log("unable to update");
    }
  };

  useEffect(() => {
    let fetchData = async () => {
      let result = await axios({
        url: `${baseUrl}/houses/${params.id}`,
      });

      let _result = result.data.data;

      setAddress(_result.address);
      setBedrooms(_result.bedrooms);
      setBathrooms(_result.bathrooms);
      setPrice(_result.price);
      setHasGarden(_result.hasGarden);
    };

    fetchData();
  }, [params.id, baseUrl]);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        let info = {
          address,
          bedrooms,
          bathrooms,
          price,
          hasGarden,
        };

        await onSubmit(info);
      }}
    >
      <label htmlFor="address">Address: </label>
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

      <label htmlFor="bedrooms">bedrooms: </label>
      <input
        id="bedrooms"
        type="number"
        placeholder="Enter your bedrooms"
        value={bedrooms}
        onChange={(e) => {
          setBedrooms(e.target.value);
        }}
      ></input>
      <br></br>
      <label htmlFor="bathrooms">bathrooms : </label>
      <input
        id="bathrooms"
        type="number"
        placeholder="Enter your bathrooms number"
        value={bathrooms}
        onChange={(e) => {
          setBathrooms(e.target.value);
        }}
      ></input>
      <br></br>
      <label htmlFor="price">price: </label>
      <input
        id="price"
        type="number"
        placeholder="Enter your price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>

      <br></br>

      <label htmlFor="hasGarden">hasGarden:</label>
      <input
        id="hasGarden"
        type="checkbox"
        checked={hasGarden}
        onChange={(e) => {
          setHasGarden(e.target.checked);
        }}
      ></input>
      <br></br>
      <button style={{ cursor: "pointer" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default UpdateHousesForm;
