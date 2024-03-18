import React from "react";
import NavBar from "./Project Component/NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateAccount from "./Project Component/CreateAccount";
import CreateLogin from "./Project Component/CreateLogin";
import VerifyEmail from "./Project Component/VerifyEmail";
import VerifyEmailPage from "./Project Component/VerifyEmail";
import RegistrationSuccessPage from "./Project Component/RegistrationSuccess";
import ForgotPassword from "./Project Component/ForgotPassword";
import ForgotPassVerification from "./Project Component/ForgotPassVerification";
import ForgotPasswordReset from "./Project Component/ForgotPasswordReset";
import LogoutAccount from "./Project Component/LogoutAccount";
import DeleteAccount from "./Project Component/DeleteAccount";
import MyProfile from "./Project Component/MyProfile";
import UpdateProfile from "./Project Component/UpdateProfile";
import DeactivateAccount from "./Project Component/DeactivateAccount";
import UpdateUserPassword from "./Project Component/UpdateUserPassword";
import ChangeEmail from "./Project Component/ChangeEmail";
import ChangeEmailVerification from "./Project Component/ChangeEmailVerification";
import ChangeEmailPage from "./Project Component/ChangeEmailPage";
import HomePage from "./Project Component/HomePage";

const WowProject = () => {
  return (
    <div>
      <Routes>
        <Route
          path="https://login-management-system.onrender.com"
          element={
            <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route index element={<HomePage></HomePage>}></Route>

          {/* <Route path ="hello" element = {<div><Outlet></Outlet></div>}>
                <Route index element = {<div>hello page</div>}></Route>
              <Route path = ":id" element = {<div>Hello and more</div>}></Route> */}

          <Route
            path="create"
            element={<CreateAccount></CreateAccount>}
          ></Route>
          <Route path="verify" element={<VerifyEmail></VerifyEmail>}></Route>
          <Route path="login" element={<CreateLogin></CreateLogin>}></Route>
          <Route
            path="forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route
            path="forgot-password-verification"
            element={<ForgotPassVerification></ForgotPassVerification>}
          ></Route>
          <Route
            path="logout"
            element={<LogoutAccount></LogoutAccount>}
          ></Route>
          <Route
            path="delete"
            element={<DeleteAccount></DeleteAccount>}
          ></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="update-my-profile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route
            path="deactivate"
            element={<DeactivateAccount></DeactivateAccount>}
          ></Route>
          <Route
            path="security"
            element={<UpdateUserPassword></UpdateUserPassword>}
          ></Route>
          <Route
            path="change-email"
            element={<ChangeEmail></ChangeEmail>}
          ></Route>
          <Route
            path="change-email-verification"
            element={<ChangeEmailVerification></ChangeEmailVerification>}
          ></Route>
          <Route
            path="change-email-page"
            element={<ChangeEmailPage></ChangeEmailPage>}
          ></Route>

          {/* Add the route for the verify-email token */}
          <Route
            path="registration-success"
            element={<RegistrationSuccessPage></RegistrationSuccessPage>}
          />
          <Route
            path="verify-email"
            element={<VerifyEmailPage />}
            querystring
          />
          <Route
            path="forgot-password-reset"
            element={<ForgotPasswordReset></ForgotPasswordReset>}
            querystring
          />
        </Route>

        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default WowProject;
