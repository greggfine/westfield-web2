import { NextApiRequest, NextApiResponse } from "next";

var cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {resources} = await cloudinary.search.expression("folder:samples")
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute();
        const publicIds = resources.map(file => file.public_id)
        res.send(publicIds)
};
 