import { Configuration, OpenAIApi } from "openai";


export const generateImage = async (prompt) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    console.log(image)
  } catch (error) {
    console.error(error);
  }
};

// return fetch (https://api.openai.com/v1/images/generations)
