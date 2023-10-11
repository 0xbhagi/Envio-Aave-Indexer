/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
let {
  AaveOracleContract,
  SourcesRegistryContract,
  ProviderRegistryContract,
} = require("../generated/src/Handlers.bs.js");

// AssetSourceUpdated event handler 
AaveOracleContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetsourceupdated.load(uniqueId);
});

AaveOracleContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Assetsourceupdated.set(entity);
  }
});
// FallbackOracleUpdated event handler 
AaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Fallbackoracleupdated.load(uniqueId);
});

AaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Fallbackoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Fallbackoracleupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
AaveOracleContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

AaveOracleContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});
// WethSet event handler 
AaveOracleContract.WethSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Wethset.load(uniqueId);
});

AaveOracleContract.WethSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Wethset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      weth: event.params.weth,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Wethset.set(entity);
  }
});

// AggregatorUpdated event handler 
SourcesRegistryContract.AggregatorUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Aggregatorupdated.load(uniqueId);
});

SourcesRegistryContract.AggregatorUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Aggregatorupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      aggregator: event.params.aggregator,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Aggregatorupdated.set(entity);
  }
});
// AddressesProviderRegistered event handler 
ProviderRegistryContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderregistered.load(uniqueId);
});

ProviderRegistryContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderregistered.set(entity);
  }
});
// AddressesProviderUnregistered event handler 
ProviderRegistryContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

ProviderRegistryContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addressesproviderunregistered.set(entity);
  }
});
// OwnershipTransferred event handler 
ProviderRegistryContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

ProviderRegistryContract.OwnershipTransferred.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ownershiptransferred.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ownershiptransferred.set(entity);
  }
});

