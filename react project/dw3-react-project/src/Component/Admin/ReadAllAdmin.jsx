import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getLoginInfo } from '../../utils/loginInfo';
// import { getLoginInfo } from '../../Utils/LogInInfo';
const ReadAllAdmin = () => {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [pageInformation, setPageInformation] = useState({})
  let [isLoading, setIsLoading] = useState(true);
  let [iserror, setIsError] = useState("");
  let navigate = useNavigate();
  let readAllData = async () => {
    
    try {
      let result = await axios({
        url: `${baseUrl}/admin?_page=${page}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${getLoginInfo().token}`
        }
        
      });
      setPageInformation(result.data.data)
      setIsLoading(false);
      setIsError("");
      setData(result.data.data.results);

      console.log(result)
      // console.log('ksdjflskfdj')
    } catch (error) {
      // console.log(
      //   "******", error.response.status
      // )

      console.log('asdkfjsdklfj')
      setIsLoading(false);
      setIsError("unable to fetch data");
      console.log("error has Occured");
      navigate("/admin/login")
    }

  };
  let deleteContact = async (id) => {
    let obj = {
      url: `${baseUrl}/admin/${id}`,
      method: "delete",
    };
    await axios(obj);
    readAllData();
  };
  useEffect(() => {
    readAllData();
  }, [page]);

  let deleteAdmin = async (id) => {
    try {
      let obj = {
        url: `${baseUrl}/admin/${id}`,
        method: "delete",
      };
      await axios(obj);
      readAllData();
    } catch (error) {
      console.log(error)
    }
    
    // console.log("deleted");
  };


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
            <p>First Name : {item.firstName}</p>
            <p>Last Name : {item.lastName}</p>
            <p>Middle Name : {item.middleName}</p>
            <p>Email : {item.email}</p>
            <p>Role : {item.role}</p>
            <p>Date Of Birth : {new Date(item.dob).toLocaleDateString()    }</p>
            <p>Phone Number : {item.phoneNumber}</p>
            <p>Gender : {item.gender}</p>
            {/* <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/admin/${item._id}`);
              }}
            >
              View
            </button> */}
            {/* <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/admin/${item._id}`);
              }}
            >
              Edit
            </button> */}
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                deleteAdmin();
              }}
            >
              Delete
            </button>
          </div>
        )
      })}


    <button
      onClick={() => {
       if (page <= 1) {
        setPage(1)
       }else{
        setPage(page - 1)
       }
      }}
       disabled = {!pageInformation.hasPreviousPage}
    >Pre</button>

      {pageInformation.currentPage} of {pageInformation.totalPage}

    <button
    onClick={() => {
      if (page === pageInformation.totalPage){
        setPage(pageInformation.totalPage)
      }else{
        setPage(page + 1)
      }
    }}
    disabled = {!pageInformation.hasNextPage}
    >
      Next
    </button>
    </div>
  )
}
export default ReadAllAdmin