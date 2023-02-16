const { Configuration, OpenAIApi } = require("openai");
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
      size: "1024x1024",
      // response_format: "b64_json",
    });
    console.log(aiResponse.data.error);
    const imageUrl = aiResponse.data.data[0].url;
    console.log(imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("error", error);
  }
};

module.exports = {
  generateImage,
};
