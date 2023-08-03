import { Router } from "express";
import {
  checkPassword,
  createUser,
  deactivate,
  deleteUser,
  forgetPassword,
  loginUser,
  logout,
  myProfile,
  readAllUser,
  readUserDetails,
  resetPassword,
  updateEmail,
  updateEmailPage,
  updateMyProfile,
  updatePassword,
  updateUser,
  verifyEmail,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import isAuthenticatedForEmail from "../middleware/isAuthenticatedForEmail.js";
import isAuthorized from "../middleware/isAuthorized.js";
// import isAuthorized from "../middleware/isAuthorized.js";

let userRouter = Router();

//localhost:8000/users/verify-email

userRouter.route("/").post(createUser).get(readAllUser);

userRouter.route("/verify-email").post(isAuthenticatedForEmail,verifyEmail);

userRouter.route("/login").post(loginUser);

userRouter.route("/my-profile").get(isAuthenticated,myProfile);

userRouter.route("/forgot-password").get(forgetPassword);

userRouter.route("/reset-password").patch(isAuthenticatedForEmail,resetPassword);

userRouter.route("/logout").delete(isAuthenticatedForEmail, logout);

userRouter.route("/update-my-profile").patch(isAuthenticated, updateMyProfile);

// userRouter.route("/update-password").patch(isAuthenticatedForEmail, updatePassword);

userRouter.route("/update-password").patch(isAuthenticatedForEmail, checkPassword);

userRouter.route("/change-email").patch(isAuthenticatedForEmail, updateEmail);

userRouter.route("/change-email-page").patch(isAuthenticatedForEmail, updateEmailPage);

userRouter.route("/deactivate").patch(isAuthenticatedForEmail, deactivate);

userRouter.route("/delete").delete(isAuthenticatedForEmail, isAuthorized(["superAdmin"]), deleteUser);



userRouter
  .route("/:id")
  .get(readUserDetails)
  .patch(updateUser)
  // .delete(isAuthenticated,isAuthorized,deleteUser);

export default userRouter;
