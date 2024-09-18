// src/services/fixedAssetService.ts
import { prisma } from "../database.js";
import { CreateFixedAssetInput, UpdateFixedAssetInput } from "../gql/resolvers-types.js";

export const FixedAssetService = {
  createFixedAsset: async (data: CreateFixedAssetInput) => {
    return prisma.fixedAsset.create({
      data: {
        name: data.name,
        accountId: data.accountId,
        number: data.number,
        type: data.type,
        acquisitionType: data.acquisitionType,
        acquisitionDate: new Date(data.acquisitionDate),
        acquisitionAmount: data.acquisitionAmount,
        vatAmount: data.vatAmount,
        comments: data.comments || null,
      },
    });
  },

  updateFixedAsset: async (data: UpdateFixedAssetInput) => {
    return prisma.fixedAsset.update({
      where: { id: Number(data.id) },
      data: {
        name: data.name || undefined,
        accountId: data.accountId || undefined,
        number: data.number || undefined,
        type: data.type || undefined,
        acquisitionType: data.acquisitionType || undefined,
        acquisitionDate: data.acquisitionDate
          ? new Date(data.acquisitionDate)
          : undefined,
        acquisitionAmount: data.acquisitionAmount || undefined,
        vatAmount: data.vatAmount || undefined,
        comments: data.comments || undefined,
      },
    });
  },

  deleteFixedAsset: async (id: string) => {
    return prisma.fixedAsset.delete({
      where: { id: Number(id) },
    });
  },
};
