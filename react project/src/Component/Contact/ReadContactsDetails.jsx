import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadContactsDetails = () => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");

  //the useParams hook to extract the id parameter from the URL.
  let params = useParams(); //{id:"12341234123424"}

  let readData = async () => {
    try {
      let result = await axios({
        url: `${baseUrl}/contacts/${params.id}`,
        method: "get",
      });

      setIsLoading(false);

      setData(result.data.data);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setData(null);
      setError("Unable to fetch data");
    }
  };

  useEffect(() => {
    readData();
  }, [baseUrl, params.id]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>



          
{/* //The data?. syntax is called optional chaining  */}
{/* It provides a concise way to access properties or call methods on an object that may be nullish (null or undefined) without causing an error.  */}
          fullName : {data?.fullName}
          <br></br>
          address : {data?.address}
          <br></br>
          phone number : {data?.phoneNumber}
          <br></br>
          email : {data?.email}
        </div>
      )}
    </div>
  );
};

export default ReadContactsDetails;
