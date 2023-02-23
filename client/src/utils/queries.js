import { gql, useQuery } from "@apollo/client";

export const QUERY_OPEN_AI_API = gql`
  query getOpenAiB64Photo($prompt: String!) {
    openAiB64Photo(prompt: $prompt) {
      photoB64
    }
  }
`;
export const QUERY_CLOUDINARY_URL = gql`
query getCloudinaryUrl($photoB64: String!) {
  cloudinaryUrl(photoB64: $photoB64) {
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
query getImages {
  images {
    _id
    url
    prompt
    createdAt
    price
  }
}
`;


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

