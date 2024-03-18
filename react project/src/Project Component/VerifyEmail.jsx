import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project CSS/verifyEmailPage.css";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(""); //To set a message according to the verification of email status

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); // the URLSearchParams API is used to extract the token parameter from the query string of the current URL.
    const token = urlParams.get("token"); //The token is retrieved using urlParams.get('token').

    if (token) {
      //if there is token, send the token to verifyEmail
      verifyEmail(token);
    } else {
      setVerificationStatus("Invalid verification token."); //else token error message
    }
  }, []); //Empty array so the component renders only on first render

  const verifyEmail = async (token) => {
    //token got from line 14
    try {
      const response = await axios.post(
        "https://login-management-system.onrender.com/users/verify-email",
        { isVerify: true },
        {
          //POST request to the server to verify the email
          //The request includes the token as a query parameter and sends a JSON payload { isVerify: true } in the request body.
          params: {
            token: token,
          },
        }
      );

      const { data } = response; //Here, response refers to the response object returned from the axios.post request made to the server.
      if (data.success && !data.isVerify) {
        //if data is success and isVerify is false, email verification message is sent else failed.
        setVerificationStatus("Email verification successful!");
      } else {
        setVerificationStatus(`Email verification failed: ${data.message}`);
      }
    } catch (error) {
      //If any other error
      console.error(error);
      setVerificationStatus(
        "An error occurred during email verification. Error: " + error.message
      );
    }
  };

  return (
    <div className="verify-email-container">
      <h1 className="verify-email-title">Email Verification Page</h1>
      <p className="verify-email-status">{verificationStatus}</p>
      <button
        onClick={() => navigate("/login")}
        className="verify-email-button"
      >
        Login
      </button>
    </div>
  );
};

export default VerifyEmailPage;
