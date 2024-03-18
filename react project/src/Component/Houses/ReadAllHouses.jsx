import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { useNavigate } from "react-router-dom";
const ReadAllHouses = () => {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [iserror, setIsError] = useState("");
  let navigate = useNavigate();

  let readAllData = async () => {
    try {
      let result = await axios({
        url: `${baseUrl}/houses`,
        method: "get",
      });
      setIsLoading(false);
      setIsError("");
      setData(result.data.data.results);
    } catch (error) {
      setIsLoading(false);
      setIsError("unable to fetch data");
      console.log("error has Occured");
    }
  };

  let deleteContact = async (id) => {
    let obj = {
      url: `${baseUrl}/houses/${id}`,
      method: "delete",
    };
    await axios(obj);
    readAllData();
  };
  
  useEffect(() => {
    readAllData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {iserror && <p>Error occured</p>}
      {data.map((item, i) => {
        return (
          <div
            style={{ border: "solid blue 3px", marginBottom: "10px" }}
            key={i}
          >
            <p>Address : {item.address}</p>
            {/* {true} */}
            <p>Bedrooms : {item.bedrooms ? item.bedrooms : "N/A"}</p>
            <p>Bathrooms : {item.bathrooms ? item.bathrooms : "N/A"}</p>
            <p>Price :NRS. {item.price ? item.price : "N/A"}</p>
            <p>HasGarden : {item.hasGarden ? "Yes" : "No"}</p>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/houses/${item._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/houses/form/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ cursor: "pointer" }}
              // onClick={(e) => {
              //   // deleteContact(item._id);
              // }}
              onClick={() => {
                deleteContact(item._id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ReadAllHouses;
