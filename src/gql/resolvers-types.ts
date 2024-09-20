import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AcquisitionType {
  Cash = 'CASH',
  Credit = 'CREDIT',
  Lease = 'LEASE'
}

export enum AssetType {
  Autres = 'AUTRES',
  Batiments = 'BATIMENTS',
  Materiels = 'MATERIELS',
  Parts = 'PARTS',
  PretsDepotsCautions = 'PRETS_DEPOTS_CAUTIONS'
}

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateFixedAssetInput = {
  accountId: Scalars['Int']['input'];
  acquisitionAmount: Scalars['Float']['input'];
  acquisitionDate: Scalars['String']['input'];
  acquisitionType: AcquisitionType;
  comments?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  type: AssetType;
  vatAmount: Scalars['Float']['input'];
};

export type FixedAsset = {
  __typename?: 'FixedAsset';
  accountId: Scalars['Int']['output'];
  acquisitionAmount: Scalars['Float']['output'];
  acquisitionDate: Scalars['String']['output'];
  acquisitionType: AcquisitionType;
  comments?: Maybe<Comment>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  type: AssetType;
  updatedAt: Scalars['String']['output'];
  vatAmount: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFixedAsset: FixedAsset;
  deleteFixedAsset: FixedAsset;
  updateFixedAsset: FixedAsset;
};


export type MutationCreateFixedAssetArgs = {
  data: CreateFixedAssetInput;
};


export type MutationDeleteFixedAssetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateFixedAssetArgs = {
  data: UpdateFixedAssetInput;
};

export type Query = {
  __typename?: 'Query';
  getFixedAsset?: Maybe<FixedAsset>;
  getFixedAssets: Array<FixedAsset>;
};


export type QueryGetFixedAssetArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateFixedAssetInput = {
  accountId?: InputMaybe<Scalars['Int']['input']>;
  acquisitionAmount?: InputMaybe<Scalars['Float']['input']>;
  acquisitionDate?: InputMaybe<Scalars['String']['input']>;
  acquisitionType?: InputMaybe<AcquisitionType>;
  comments?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<AssetType>;
  vatAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AcquisitionType: AcquisitionType;
  AssetType: AssetType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateFixedAssetInput: CreateFixedAssetInput;
  FixedAsset: ResolverTypeWrapper<FixedAsset>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateFixedAssetInput: UpdateFixedAssetInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateFixedAssetInput: CreateFixedAssetInput;
  FixedAsset: FixedAsset;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UpdateFixedAssetInput: UpdateFixedAssetInput;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['FixedAsset'] = ResolversParentTypes['FixedAsset']> = ResolversObject<{
  accountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  acquisitionAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  acquisitionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  acquisitionType?: Resolver<ResolversTypes['AcquisitionType'], ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vatAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createFixedAsset?: Resolver<ResolversTypes['FixedAsset'], ParentType, ContextType, RequireFields<MutationCreateFixedAssetArgs, 'data'>>;
  deleteFixedAsset?: Resolver<ResolversTypes['FixedAsset'], ParentType, ContextType, RequireFields<MutationDeleteFixedAssetArgs, 'id'>>;
  updateFixedAsset?: Resolver<ResolversTypes['FixedAsset'], ParentType, ContextType, RequireFields<MutationUpdateFixedAssetArgs, 'data'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getFixedAsset?: Resolver<Maybe<ResolversTypes['FixedAsset']>, ParentType, ContextType, RequireFields<QueryGetFixedAssetArgs, 'id'>>;
  getFixedAssets?: Resolver<Array<ResolversTypes['FixedAsset']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Comment?: CommentResolvers<ContextType>;
  FixedAsset?: FixedAssetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

