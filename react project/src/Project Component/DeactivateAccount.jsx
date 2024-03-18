import React from "react";
import { useNavigate } from "react-router-dom";
import { getLoginInfo, removeLoginInfo } from "../utils/loginInfo";
import axios from "axios";

const DeactivateAccount = () => {
  const navigate = useNavigate();

  let logoutAdmin = async () => {
    try {
      await axios({
        url: `https://login-management-system.onrender.com/users/deactivate?token=${
          getLoginInfo()?.token
        }`,
        method: "patch",
      });

      removeLoginInfo();

      navigate(`/login`);
    } catch (error) {
      console.log("Unable to Deactivate Account.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div>
          <h1>Do you want to deactivate account?</h1>
          {getLoginInfo()?.token ? (
            <button
              className="form-button"
              onClick={() => {
                //It checks if the token value exists in the
                //  result of the getLoginInfo() function call. If the token exists, it renders the content inside the parentheses (...),
                //  otherwise it renders null.
                logoutAdmin();
              }}
            >
              Deactivate
            </button>
          ) : null}
          <button
            className="form-button"
            onClick={(e) => {
              navigate("/");
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeactivateAccount;
