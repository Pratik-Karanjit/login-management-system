// before working with multer first always make public folder(it is the common error that beginner does)
//(public folder is where the file gets store)

import multer from "multer";
import path from "path";

let limit = {
  fileSize: 1024 * 1024 * 3, //2Mb
  // the max file size (in bytes)
  // 1kb equal to 1024
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let staticFolder = "./public";

    cb(null, staticFolder);

    //vvvimp  ./means root (main) folder
    // note you must make public  folder manually other it will through (error) like no such file or directory
  },
  //destination give the folder location where file is place

  filename: (req, file, cb) => {
    // any file has key and value
    //key is called as fieldName, value is called as originalname
    let fileName = Date.now() + file.originalname;
    cb(null, fileName);
  },
  //filename give the name of file
});

let fileFilter = (req, file, cb) => {
  let validExtensions = [
    ".jpeg",
    ".jpg",
    ".JPG",
    ".JPEG",
    ".png",
    ".svg",
    ".doc",
    ".pdf",
    ".mp4",
    ".PNG",
  ];

  let originalName = file.originalname;
  let originalExtension = path.extname(originalName); //note path module is inbuilt module(package) of node js (ie no need to install path package)
  let isValidExtension = validExtensions.includes(originalExtension);

  if (isValidExtension) {
    cb(null, true);
    //true =>it means  pass such type of file
    //note null represent error since there is no error thus error is null
  } else {
    cb(new Error("File is not supported"), false);

    //false means don't pass such type of file
  }
};

const upload = multer({
  storage: storage, //we define the location in server where the file is store and control the fileName
  fileFilter: fileFilter, //we filter (generally) according to extension
  limit: limit, //we filter file according to its size
});

export default upload;

// vvvvvvvvvvvvvvvimp
//upload midddleware  does following thing
// 1) upload single image if upload.single is used  or upload multiple image if upload.multiple is used
//2) add body(to get req.body in file data you must use multer) and file(or files) to request ie you can get req.body and req.file
//3 note req.file for upload.singe and req.files for upload.array
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVIIIIIIMP
//you must use upload middler to get form data.

//in simpleword to use form data
//  add expressApp.use(urlencoded({ extended: true }));  at index.js file
//and use upload  middleware ( to get form data)

//to use this middleware
