const { Configuration, OpenAIApi } = require("openai");
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const generateImage = async (prompt) => {
  console.log("MADE IT in API.js", prompt);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log(prompt);
  const openai = new OpenAIApi(configuration);

  try {
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });
    console.log(aiResponse.data);
    const photoB64 = aiResponse.data.data[0].b64_json;

    return photoB64;
  } catch (error) {
    console.error("error", error);
  }
};

const generateUrl = async (photoB64) => {
  console.log("MADE IT TO API.js - generateUrl")
  console.log(photoB64.slice(0,45))
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });
  const photoUrl = await cloudinary.uploader.upload(photoB64);
  console.log('PHOTO-URL', photoUrl.url)
  return photoUrl.url;
}

module.exports = {
  generateImage, generateUrl
};
