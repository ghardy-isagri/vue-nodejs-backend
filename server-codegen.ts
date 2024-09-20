import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/gql/schema.graphql",
  generates: {
    "./src/gql/resolvers-types.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers"
      ],
      config: {
        useIndexSignature: true,
      },
    },
  },
};

export default config;
