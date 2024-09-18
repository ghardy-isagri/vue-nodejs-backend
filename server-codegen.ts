import type { CodegenConfig } from "@graphql-codegen/cli";

const server: CodegenConfig = {
  schema: "./src/gql/schema.graphql",
  generates: {
    "./src/gql/resolvers-types.ts": {
      config: {
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default server;
