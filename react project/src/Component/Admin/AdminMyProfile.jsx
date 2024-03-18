import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getLoginInfo } from "../../utils/loginInfo";

const AdminMyProfile = () => {
  let [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState("");

  let params = useParams(); //{id:"12341234123424"}
let navigate=useNavigate()
  let readData = async () => {
    try {
      let result = await axios({
        url:`${baseUrl}/admin/my-profile`,
        method:'get',
        headers:{
          Authorization: `Bearer ${getLoginInfo()?.token}`
        }
      });

      setIsLoading(false);

      setData(result.data.data);
      setError("");
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      setData(null);
      setError("Unable to fetch data");

      // if(error.response.status===401)
      // {
        navigate('/admin/login')

      // }

    }
  };

  useEffect(() => {
    readData();
  }, [baseUrl, params.id]);

  return (
     <div
            style={{ border: "solid blue 3px", marginBottom: "10px" }}
          >
            <p>First Name : {data?.firstName}</p>
            <p>Last Name : {data?.lastName}</p>
            <p>Middle Name : {data?.middleName}</p>
            <p>Email : {data?.email}</p>
            <p>Role : {data?.role}</p>
            <p>Date Of Birth : {data?.dob}</p>
            <p>Phone Number : {data?.phoneNumber}</p>
            <p>Gender : {data?.gender}</p>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/admin/${data?._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/admin/${data._id}`);
              }}
            >
              Edit
            </button>
            {/* <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                deleteContact(data._id);
              }}
            >
              Delete
            </button> */}
          </div>
  );
};

export default AdminMyProfile;
