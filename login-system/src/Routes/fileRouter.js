import { Router } from "express";
import upload from "../middleware/uploadFile.js";
import successResponse from "../helper/successResponse.js";
import { HttpStatus } from "../config/constant.js";

let fileRouter = Router();

//localhost:8000/files/single
fileRouter.route("/single").post(upload.single("img"), (req, res, next) => {
  //   console.log(req.file);
  let link = `localhost:8000/${req.file.filename}`;
  successResponse(res, HttpStatus.OK, "file Uploaded successfully", link);
});

fileRouter.route("/multiple").post(upload.array("img", 5), (req, res, next) => {
  console.log(req.files);
  let links = req.files.map((value, i) => {
    let link = `localhost:8000/${value.filename}`;
    return link;
  });

  successResponse(res, HttpStatus.OK, "files Uploaded successfully", links);
});
export default fileRouter;
