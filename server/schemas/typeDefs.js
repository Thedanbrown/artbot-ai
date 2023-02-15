const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Image {
    _id: ID
    description: String
    createdAt: String
    jpeg: String
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
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    images: [Image]
    image(_id: ID!): [Image]
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  input ImageInfo {
    imageId: String
    prompt: String
    createdAt: String
    url: String
    price: Float
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(images: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveImage(input: ImageInfo): Order
    removeImage(imageId: String!): Order
  }
`;

module.exports = typeDefs;
