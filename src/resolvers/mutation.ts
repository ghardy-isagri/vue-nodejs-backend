// src/resolvers/mutation.ts 
import { CreateFixedAssetInput, UpdateFixedAssetInput } from "../gql/resolvers-types.js";
import { FixedAssetService } from "../services/FixedAssetService.js";

export const Mutation = {
  createFixedAsset: async (_parent: unknown, args: { data: CreateFixedAssetInput }) => {
    return FixedAssetService.createFixedAsset(args.data);
  },

  updateFixedAsset: async (_parent: unknown, args: { data: UpdateFixedAssetInput }) => {
    return FixedAssetService.updateFixedAsset(args.data);
  },

  deleteFixedAsset: async (_parent: unknown, args: { id: string }) => {
    return FixedAssetService.deleteFixedAsset(args.id);
  },
};


