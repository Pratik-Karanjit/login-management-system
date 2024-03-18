import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadHousesDetail = () => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");

  let params = useParams(); //{id:"12341234123424"}

  let readData = async () => {
    try {
      let result = await axios({
        url: `${baseUrl}/houses/${params.id}`,
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
          address : {data?.address}
          <br></br>
          bedrooms : {data?.bedrooms ? data?.bedrooms : "N/A"}
          <br></br>
          bathrooms : {data?.bathrooms ? data?.bathrooms : "N/A"}
          <br></br>
          {data.price ? (
            <div>
              price : NRS.
              {data?.price}
              <br></br>
            </div>
          ) : null}
          hasGarden:{data?.hasGarden ? "Yes" : "No"}
        </div>
      )}
    </div>
  );
};

export default ReadHousesDetail;
