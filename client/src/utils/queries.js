import { gql } from "@apollo/client";

export const QUERY_OPEN_AI_API = gql`
  query getOpenApiUrl($prompt: String!) {
    openAiAPIUrl(prompt: $prompt) {
      url
    }
  }
`;

export const QUERY_SINGLE_IMAGE = gql`
  query getSingleImage($imageId: ID!) {
    image(imageId: $imageId) {
      _id
      createdAt
      price
      prompt
      url
    }
  }
`;

export const QUERY_IMAGES = gql``;


export const QUERY_ME = gql``;


