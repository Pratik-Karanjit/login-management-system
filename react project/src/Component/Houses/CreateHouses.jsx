import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { useNavigate } from "react-router-dom";

const CreateHouses = () => {
  let [address, setAddress] = useState("");
  let [bedrooms, setBedrooms] = useState("");
  let [bathrooms, setBathrooms] = useState("");
  let [price, setPrice] = useState("");
  let [hasGarden, setHasGarden] = useState(false);

  let navigate = useNavigate();

  let onSubmit = async (info) => {
    try {
      let result = await axios({
        url: `${baseUrl}/houses`,
        method: "post",
        data: info,
      });

      // console.log("created successfully");
      navigate(`/houses/${result.data.data._id}`);
    } catch (error) {
      console.log("unable to create");
    }
  };
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

export default CreateHouses;
