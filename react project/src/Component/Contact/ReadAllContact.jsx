import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const ReadAllContact = () => {
  let [readallcontact, setReadAllContact] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [iserror, setIsError] = useState("");
  let navigate = useNavigate();
  let readAllCon = async () => {
    try {
      let result = await axios({
        url: `${baseUrl}/contacts`,
        method: "get",
      });
      setIsLoading(false);
      setIsError("");
      setReadAllContact(result.data.data.results);
    } catch (error) {
      setIsLoading(false);
      setIsError("unable to fetch data");
      console.log("error has Occured");
    }
  };
  let deleteContact = async (id) => {
    let obj = {
      url: `${baseUrl}/contacts/${id}`,
      method: "delete",
    };
    await axios(obj);
    readAllCon();
    console.log("deleted");
  };
  useEffect(() => {
    readAllCon();
  }, []);
  console.log(readallcontact);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {iserror && <p>Error occured</p>}
      {readallcontact.map((item, i) => {
        console.log("*********", item);
        return (
          <div
            style={{ border: "solid blue 3px", marginBottom: "10px" }}
            key={i}
          >
            <p>Full name : {item.fullName}</p>
            <p>Address : {item.address}</p>
            <p>Phone number : {item.phoneNumber}</p>
            <p>email : {item.email}</p>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/contacts/${item._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                navigate(`/contacts/form/${item._id}`);
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
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085D6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteContact(item._id);
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
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
export default ReadAllContact;
