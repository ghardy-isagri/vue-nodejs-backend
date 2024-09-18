// tests/fixedAssetService.test.ts
import { expect } from 'chai';
import sinon from 'sinon';
import { prisma } from '../src/database.js'; 
import { AssetType, AcquisitionType } from '../src/gql/resolvers-types.js';
import { FixedAssetService } from '../src/services/FixedAssetService.js';

describe('FixedAssetService', () => {
  let prismaCreateStub: sinon.SinonStub;
  let prismaUpdateStub: sinon.SinonStub;
  let prismaDeleteStub: sinon.SinonStub;

  beforeEach(() => {
    prismaCreateStub = sinon.stub(prisma.fixedAsset, 'create');
    prismaUpdateStub = sinon.stub(prisma.fixedAsset, 'update');
    prismaDeleteStub = sinon.stub(prisma.fixedAsset, 'delete');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should create a new FixedAsset', async () => {
    const fixedAssetInput = {
      name: 'Building A',
      accountId: 1,
      number: 101,
      type: AssetType.Autres,
      acquisitionType: AcquisitionType.Cash,
      acquisitionDate: '2023-09-01',
      acquisitionAmount: 500000,
      vatAmount: 10000,
      comments: 'Test Building',
    };

    const expectedFixedAsset = {
      id: 1,
      ...fixedAssetInput,
      acquisitionDate: new Date(fixedAssetInput.acquisitionDate),
    };

    prismaCreateStub.resolves(expectedFixedAsset);

    const result = await FixedAssetService.createFixedAsset(fixedAssetInput);

    expect(result).to.deep.equal(expectedFixedAsset);
    expect(prisma.fixedAsset.create).to.be.true;
  });

  it('should update an existing FixedAsset', async () => {
    const updateFixedAssetInput = {
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

    prismaUpdateStub.resolves(expectedUpdatedFixedAsset);

    const result = await FixedAssetService.updateFixedAsset(updateFixedAssetInput);

    expect(result).to.deep.equal(expectedUpdatedFixedAsset);
    expect(prisma.fixedAsset.update).to.be.true;
  });

  it('should delete a FixedAsset', async () => {
    const deleteFixedAssetInput = {
      id: '1',
    };

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

    prismaDeleteStub.resolves(expectedDeletedFixedAsset);

    const result = await FixedAssetService.deleteFixedAsset(deleteFixedAssetInput.id);

    expect(result).to.deep.equal(expectedDeletedFixedAsset);
    expect(prisma.fixedAsset.delete).to.be.true;
  });
});
