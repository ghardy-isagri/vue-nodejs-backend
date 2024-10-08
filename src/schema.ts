import { gql } from "apollo-server";

const typeDefs = gql`
type FixedAsset {
  id: ID!
  name: String!
  accountId: Int!
  number: Int!
  type: AssetType!
  acquisitionType: AcquisitionType!
  acquisitionDate: String!
  acquisitionAmount: Float!
  vatAmount: Float!
  comments: String
  createdAt: String!
  updatedAt: String!
}

enum AssetType {
  AUTRES
  BATIMENTS
  MATERIELS
  PARTS
  PRETS_DEPOTS_CAUTIONS
}

enum AcquisitionType {
  CASH
  CREDIT
  LEASE
}

input CreateFixedAssetInput {
  name: String!
  accountId: Int!
  number: Int!
  type: AssetType!
  acquisitionType: AcquisitionType!
  acquisitionDate: String!
  acquisitionAmount: Float!
  vatAmount: Float!
  comments: String
}

input UpdateFixedAssetInput {
  id: ID!
  name: String
  accountId: Int
  number: Int
  type: AssetType
  acquisitionType: AcquisitionType
  acquisitionDate: String
  acquisitionAmount: Float
  vatAmount: Float
  comments: String
}

type Query {
  getFixedAssets: [FixedAsset!]!
  getFixedAsset(id: ID!): FixedAsset
}

type Mutation {
  createFixedAsset(data: CreateFixedAssetInput!): FixedAsset!
  updateFixedAsset(data: UpdateFixedAssetInput!): FixedAsset!
  deleteFixedAsset(id: ID!): FixedAsset!
}

`;
export { typeDefs };
