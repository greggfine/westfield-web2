import { NextApiRequest, NextApiResponse } from "next";

var cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            // upload_preset: "dev_setups"
        })
        console.log(uploadedResponse)
        res.json({msg: "YAYAA"})
    } catch(error) {
        console.error(error)
        res.status(500).json({err: "Something Went Wrong"})
    }
  res.status(200).json({});
};
 