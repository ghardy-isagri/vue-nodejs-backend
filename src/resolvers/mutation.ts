import { prisma } from "../database";
import { CreateFixedAssetInput, UpdateFixedAssetInput } from "../gql/resolvers-types";

const Mutation = {

  
  // Create a new FixedAsset
  createFixedAsset: async (
    _parent: unknown,
    args: { data: CreateFixedAssetInput }
  ) => {
    return prisma.fixedAsset.create({
      data: {
        name: args.data.name,
        accountId: args.data.accountId,
        number: args.data.number,
        type: args.data.type,
        acquisitionType: args.data.acquisitionType,
        acquisitionDate: new Date(args.data.acquisitionDate),
        acquisitionAmount: args.data.acquisitionAmount,
        vatAmount: args.data.vatAmount,
        comments: args.data.comments || null,
      },
    });
  },

  // Update an existing FixedAsset
  updateFixedAsset: async (
    _parent: unknown,
    args: { data: UpdateFixedAssetInput }
  ) => {
    return prisma.fixedAsset.update({
      where: { id: Number(args.data.id) },
      data: {
        name: args.data.name || undefined,
        accountId: args.data.accountId || undefined,
        number: args.data.number || undefined,
        type: args.data.type || undefined,
        acquisitionType: args.data.acquisitionType || undefined,
        acquisitionDate: args.data.acquisitionDate
          ? new Date(args.data.acquisitionDate)
          : undefined,
        acquisitionAmount: args.data.acquisitionAmount || undefined,
        vatAmount: args.data.vatAmount || undefined,
        comments: args.data.comments || undefined,
      },
    });
  },

  // Delete a FixedAsset
  deleteFixedAsset: async (_parent: unknown, args: { id: string }) => {
    return prisma.fixedAsset.delete({
      where: { id: Number(args.id) },
    });
  },
};
export { Mutation };
