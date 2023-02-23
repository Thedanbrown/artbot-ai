const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Image {
    _id: ID
    prompt: String
    createdAt: String
    url: String
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    images: [Image]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    images: [Image]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type openAiB64Photo {
    photoB64: String
  }
  type cloudinaryUrl {
    url: String
  }

  type Query {
    images: [Image]
    image(imageId: ID!): Image
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    openAiB64Photo(prompt: String!): openAiB64Photo
    cloudinaryUrl(photoB64: String!): cloudinaryUrl
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      dob: String!
    ): Auth
    addOrder(images: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      dob: String
    ): User
    login(email: String!, password: String!): Auth
    saveImage(prompt: String!, url: String!): Image
    removeImage(imageId: ID!): Image
    
  }
`;

module.exports = typeDefs;
