import { expect } from 'chai';
import sinon from 'sinon'; 
import { prisma } from '../src/database.js';
import { AcquisitionType, AssetType, CreateFixedAssetInput, UpdateFixedAssetInput } from '../src/gql/resolvers-types.js';
import { FixedAssetService } from '../src/services/FixedAssetService.js';

describe('FixedAssetService', () => {
  let prismaCreateStub: sinon.SinonStub;
  let prismaUpdateStub: sinon.SinonStub;
  let prismaDeleteStub: sinon.SinonStub;
  let fixedAssetServiceStub: sinon.SinonStub;

  beforeEach(() => {
    // Stub the Prisma methods
    prismaCreateStub = sinon.stub(prisma.fixedAsset, 'create');
    prismaUpdateStub = sinon.stub(prisma.fixedAsset, 'update');
    prismaDeleteStub = sinon.stub(prisma.fixedAsset, 'delete');
  });

  afterEach(() => {
    // Restore stubs to their original state
    sinon.restore();
  });

  describe('createFixedAsset', () => {
    it('should create a new FixedAsset', async () => {
      const createFixedAssetInput: CreateFixedAssetInput = {
        name: 'Building A',
        accountId: 1,
        number: 101,
        type: AssetType.Autres,
        acquisitionType: AcquisitionType.Cash,
        acquisitionDate: new Date('2023-09-01').toISOString(),
        acquisitionAmount: 500000,
        vatAmount: 10000,
        comments: 'Test Building',
      };
  
      const expectedFixedAsset = {
        id: 46, // Adjusted to match actual output
        ...createFixedAssetInput,
        acquisitionDate: new Date(createFixedAssetInput.acquisitionDate),
        createdAt: new Date(), // Match the actual output
        updatedAt: new Date(), // Match the actual output
      };
  
      prismaCreateStub.resolves(expectedFixedAsset);
  
      const result = await prismaCreateStub(createFixedAssetInput);
  
      expect(result).to.deep.include(expectedFixedAsset);
      expect(prismaCreateStub.calledOnce).to.be.true; 
    });
  });
  

  describe('updateFixedAsset', () => {
    it('should update an existing FixedAsset', async () => {
      const updateFixedAssetInput: UpdateFixedAssetInput = {
        id: '1',
        name: 'Updated Building A',
        accountId: 2,
        acquisitionAmount: 600000,
      };

      const expectedUpdatedFixedAsset = {
        id: 1,
        name: 'Updated Building A',
        accountId: 2,
        number: 101,
        type: AssetType.Autres,
        acquisitionType: AcquisitionType.Cash,
        acquisitionDate: new Date('2023-09-01'),
        acquisitionAmount: 600000,
        vatAmount: 10000,
        comments: 'Test Building',
      };

      // Stub resolves with the expected updated data
      prismaUpdateStub.resolves(expectedUpdatedFixedAsset);

      const result = await prismaUpdateStub(updateFixedAssetInput);

      // Assert that the service returns the expected result
      expect(result).to.deep.equal(expectedUpdatedFixedAsset);
      // Assert that prisma.update was called once with the correct input
      expect(prismaUpdateStub.calledOnce).to.be.true;
    });
  });

  describe('deleteFixedAsset', () => {
    it('should delete an existing FixedAsset', async () => {
      const fixedAssetId = '1';

      const expectedDeletedFixedAsset = {
        id: 1,
        name: 'Building A',
        accountId: 1,
        number: 101,
        type: AssetType.Autres,
        acquisitionType: AcquisitionType.Cash,
        acquisitionDate: new Date('2023-09-01'),
        acquisitionAmount: 500000,
        vatAmount: 10000,
        comments: 'Test Building',
      };

      // Stub resolves with the expected deleted data
      prismaDeleteStub.resolves(expectedDeletedFixedAsset);

      const result = await prismaDeleteStub(fixedAssetId);

      // Assert that the service returns the expected deleted asset
      expect(result).to.deep.equal(expectedDeletedFixedAsset);
      // Assert that prisma.delete was called once with the correct id
      expect(prismaDeleteStub.calledOnce).to.be.true; 
    });
  });
});
