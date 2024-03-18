import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getLoginInfo } from "../utils/loginInfo";

const MyProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  let readData = async () => {
    try {
      let response = await axios({
        url: "https://login-management-system.onrender.com/users/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`,
        },
      });

      const { result } = response.data;
      const { fName, lName, dob, profileImage, role, email } = result;

      setFirstName(fName);
      setLastName(lName);
      setDateOfBirth(new Date(dob).toLocaleDateString());
      setProfileImage(profileImage);
      setRole(role);
      setEmail(email);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    readData();
  }, [params.id]);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="profile-section">
        <label className="profile-label">First Name:</label>
        <p className="profile-info">{firstName}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Last Name:</label>
        <p className="profile-info">{lastName}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Date of Birth:</label>
        <p className="profile-info">{dateOfBirth}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Email:</label>
        <p className="profile-info">{email}</p>
        <button
          onClick={(e) => {
            navigate("/change-email");
          }}
        >
          Change Email
        </button>
      </div>
      <div className="profile-section">
        <label className="profile-label">Profile Image:</label>
        <img className="profile-image" src={profileImage} alt="Profile" />
      </div>
      <div className="profile-section">
        <label className="profile-label">Role:</label>
        <p className="profile-info">{role}</p>
      </div>
      <button
        className="profile-button"
        onClick={(e) => {
          navigate("/update-my-profile");
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default MyProfile;
