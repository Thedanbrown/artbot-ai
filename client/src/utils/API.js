import { Configuration, OpenAIApi } from "openai";

export const generateImage = async (prompt) => {
  console.log("MADE IT in API.js", prompt);
  const configuration = new Configuration({
    // apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
    apiKey: "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",
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
    console.log(aiResponse);
    const imageUrl = aiResponse.data.data[0].url;
    console.log(imageUrl);
  } catch (error) {
    console.error(error);
  }
};
