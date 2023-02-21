import { gql, useQuery } from "@apollo/client";

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

export const QUERY_IMAGES = gql`
query getImages($userEmail: String!) {
    images(userEmail: $userEmail) {
      _id
      createdAt
      prompt
      price
      url
    }
  }`;


export const QUERY_ME = gql`
query getMe {
    me {
      _id
      email
      firstName
      images {
        _id
        url
        price
        createdAt
      }
      orders {
        _id
        purchaseDate
        images {
          _id
          url
          createdAt
        }
      }
    }
  }
`;


export const QUERY_ORDER = gql`
query  addOrder{
    purchaseDate
    images {
      _id
      createdAt
      price
      prompt
      url
      }
    }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
