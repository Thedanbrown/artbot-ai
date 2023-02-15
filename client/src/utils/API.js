import { Configuration, OpenAIApi } from "openai";

export const generateImage = async (prompt) => {
  console.log("MADE IT in API.js", prompt);
  const configuration = new Configuration({
    // apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    apiKey: "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",
  });
  // console.log(process.env.REACT_APP_OPENAI_API_KEY)
  console.log(prompt);
  const openai = new OpenAIApi(configuration);

  try {
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json",
    });
    console.log(aiResponse);
    const image = aiResponse.data.data[0].b64_json;
    console.log(image);
  } catch (error) {
    console.error(error);
  }
};


