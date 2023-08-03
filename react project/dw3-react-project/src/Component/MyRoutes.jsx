import React from "react";
import {Route, Routes } from "react-router-dom";
import ReadAllContact from "./Contact/ReadAllContact";
import ReadContactsDetails from "./Contact/ReadContactsDetails";
import CreateForm from "./Contact/CreateForm";
import UpdateForm from "./Contact/UpdateForm";
import NavLinks from "./NavLinks";
import CreateHouses from "./Houses/CreateHouses";
import ReadAllHouses from "./Houses/ReadAllHouses";
import ReadHousesDetail from "./Houses/ReadHousesDetail";
import UpdateHousesForm from "./Houses/UpdateHousesForm";
import AdminRegister from "./Admin/AdminRegister";
import AdminLogin from "./Admin/AdminLogin";
import AdminMyProfile from "./Admin/AdminMyProfile";
import ReadAllAdmin from "./Admin/ReadAllAdmin";
import UpdatePassword from "./Admin/UpdatePassword";
import UpdateMyProfile from "./Admin/UpdateMyProfile";
import ForgotPassword from "./Admin/ForgotPassword";
import ResetPassword from "./Admin/ResetPassword";

const MyRoutes = () => {
  return (
    <div>
      <NavLinks></NavLinks>
      <Routes>
        
        <Route path="/houses" element={<ReadAllHouses></ReadAllHouses>}></Route>
        <Route
          path="/houses/:id"
          element={<ReadHousesDetail></ReadHousesDetail>}
        ></Route>
        <Route
          path="/houses/form"
          element={<CreateHouses></CreateHouses>}
        ></Route>
        <Route
          path="/houses/form/:id"
          element={<UpdateHousesForm></UpdateHousesForm>}
        ></Route>
        <Route path="/contacts" element={<ReadAllContact />}></Route>
        <Route
          path="/contacts/:id"
          element={<ReadContactsDetails></ReadContactsDetails>}
        ></Route>
        <Route
          path="/contacts/form"
          element={<CreateForm></CreateForm>}
        ></Route>
        <Route
          path="/contacts/form/:id"
          element={<UpdateForm></UpdateForm>}
        ></Route>
        
        
        <Route
          path="/admin/register"
          element={<AdminRegister></AdminRegister>}
        ></Route>
        <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/admin" element={<ReadAllAdmin></ReadAllAdmin>}></Route>
        <Route path="/admin/update-password" element={<UpdatePassword></UpdatePassword>}></Route>
        <Route path="/admin/update-my-profile" element={<UpdateMyProfile></UpdateMyProfile>}></Route>
        <Route path="/admin/reset-password" element={<ResetPassword></ResetPassword>}></Route>
        <Route path="/admin/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route
          path="/admin/my-profile"
          element={<AdminMyProfile></AdminMyProfile>}
        ></Route>
        

      </Routes>
    </div>
  );
};

export default MyRoutes;
