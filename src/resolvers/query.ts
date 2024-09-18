import { prisma } from "../database.js";

// Define types for the query arguments
interface Args {
  id?: string;
}


const Query = {
  // Fetch all FixedAssets
  getFixedAssets: async () => {
    return prisma.fixedAsset.findMany();
  },

  // Fetch a single FixedAsset by ID
  getFixedAsset: async (_parent: unknown, args: { id: string }) => {
    return prisma.fixedAsset.findUnique({
      where: { id: Number(args.id) },
    });
  },
};

export { Query };
