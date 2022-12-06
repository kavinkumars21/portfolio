import express from "express";
import multer from "multer";
import { GetPersonalData } from "../Controllers/GetPersonalData.js";
import { PersonalData } from "../Controllers/PostPersonalData.js";
import { AddImages } from "../Controllers/Images.js";
import { GetImage } from "../Controllers/GetImage.js";
import { PostSchoolInfo } from "../Controllers/PostSchoolInfo.js";
import { GetSchoolInfo } from "../Controllers/GetSchoolInfo.js";
import { GetMarksheetById } from "../Controllers/GetMarksheetById.js";

const Route = express.Router();

const Storages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "profile");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const Upload = multer({
    storage: Storages,
    limits: {
        fileSize: 90000000,
    },
});

const CerStorages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "profile");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const MarksheetUpload = multer({
    storage: CerStorages,
    limits: {
        fileSize: 90000000,
    },
});

Route.post("/personalDetail", PersonalData);
Route.get("/getpersonalDetail", GetPersonalData);
Route.post("/uploadImage", Upload.single("images"), AddImages);
Route.get("/getImage", GetImage);
Route.post("/postschoolinfo", MarksheetUpload.single("marksheet"),PostSchoolInfo);
Route.get("/getschoolinfo", GetSchoolInfo);
Route.get("/getmarksheet", GetMarksheetById);

export default Route;
