import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $dob: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, dob: $dob) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
        images {
          _id
          url
        }
        orders {
          _id
          images {
            _id
            price
            url
          }
        }
      }
    }
  }
`;

export const SAVE_IMAGE = gql`
mutation saveImage($prompt: String!, $url: String!) {
    saveImage(prompt: $prompt, url: $url) {
      _id
      createdAt
      price
      prompt
      url
    }
  }
`;

export const REMOVE_IMAGE = gql`
mutation removeImage($imageId: ID!) {
    removeImage(imageId: $imageId) {
      _id
      prompt
      url
    }
  }
`;

