import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (localFIlePath) => {
  try {
    if (!localFIlePath) return null;
    //Upload the file on cloudinary
    const res = await cloudinary.uploader.upload(localFIlePath, {
      resource_type: "auto",
    });
    console.log("File Uploaded Successfully", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localFIlePath); // remove the locally saved temp file as the upload operation failed.
    console.log("Cloudinary Error", error);
    return null;
  }
};
