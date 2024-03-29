import { ImgSchema } from "../Schema/ImageSchema.js";
import fs from "fs";

export const AddImages = async (req, res) => {
    const UploadingImage = new ImgSchema({
        profilePic: {
            data: fs.readFileSync("Image/" + req.file.filename),
            contentType: "image/png",
        },
    });
    UploadingImage.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.send({
            status: 200,
            message: "Image is added",
            data: data,
        });
    });
};
