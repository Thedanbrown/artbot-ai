import { gql } from "@apollo/client";

export const QUERY_OPEN_AI_API = gql`
  query getOpenApiUrl($prompt: String!) {
    openAiAPIUrl(prompt: $prompt) {
      url
    }
  }
`;
