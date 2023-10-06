/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
 let { 
    AaveOracleContract,
    SourcesRegistryContract,
    ProviderRegistryContract,
} = require("../generated/src/Handlers.bs.js");

// AssetSourceUpdated event handler 
AaveOracleContract.AssetSourceUpdated.loader ((event, context) => {
    context.Assetsourceupdated.load(event.transactionHash);
  });
  
AaveOracleContract.AssetSourceUpdated.handler ((event, context) => {
    let entity = context.Assetsourceupdated.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        asset: event.params.asset,
        source: event.params.source,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Assetsourceupdated.set(entity);
    }
  });
// FallbackOracleUpdated event handler 
AaveOracleContract.FallbackOracleUpdated.loader ((event, context) => {
    context.Fallbackoracleupdated.load(event.transactionHash);
  });
  
AaveOracleContract.FallbackOracleUpdated.handler ((event, context) => {
    let entity = context.Fallbackoracleupdated.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        fallbackOracle: event.params.fallbackOracle,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Fallbackoracleupdated.set(entity);
    }
  });
// OwnershipTransferred event handler 
AaveOracleContract.OwnershipTransferred.loader ((event, context) => {
    context.Ownershiptransferred.load(event.transactionHash);
  });
  
AaveOracleContract.OwnershipTransferred.handler ((event, context) => {
    let entity = context.Ownershiptransferred.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        previousOwner: event.params.previousOwner,
        newOwner: event.params.newOwner,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Ownershiptransferred.set(entity);
    }
  });
// WethSet event handler 
AaveOracleContract.WethSet.loader ((event, context) => {
    context.Wethset.load(event.transactionHash);
  });
  
AaveOracleContract.WethSet.handler ((event, context) => {
    let entity = context.Wethset.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        weth: event.params.weth,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Wethset.set(entity);
    }
  });

// AggregatorUpdated event handler 
SourcesRegistryContract.AggregatorUpdated.loader ((event, context) => {
    context.Aggregatorupdated.load(event.transactionHash);
  });
  
  SourcesRegistryContract.AggregatorUpdated.handler ((event, context) => {
    let entity = context.Aggregatorupdated.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        token: event.params.token,
        aggregator: event.params.aggregator,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Aggregatorupdated.set(entity);
    }
  });
// AddressesProviderRegistered event handler 
ProviderRegistryContract.AddressesProviderRegistered.loader ((event, context) => {
    context.Addressesproviderregistered.load(event.transactionHash);
  });
  
ProviderRegistryContract.AddressesProviderRegistered.handler ((event, context) => {
    let entity = context.Addressesproviderregistered.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        newAddress: event.params.newAddress,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Addressesproviderregistered.set(entity);
    }
  });
// AddressesProviderUnregistered event handler 
ProviderRegistryContract.AddressesProviderUnregistered.loader ((event, context) => {
    context.Addressesproviderunregistered.load(event.transactionHash);
  });
  
ProviderRegistryContract.AddressesProviderUnregistered.handler ((event, context) => {
    let entity = context.Addressesproviderunregistered.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        newAddress: event.params.newAddress,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Addressesproviderunregistered.set(entity);
    }
  });
// OwnershipTransferred event handler 
ProviderRegistryContract.OwnershipTransferred.loader ((event, context) => {
    context.Ownershiptransferred.load(event.transactionHash);
  });
  
ProviderRegistryContract.OwnershipTransferred.handler ((event, context) => {
    let entity = context.Ownershiptransferred.get(event.transactionHash);
  
    if (!entity) {
      entity = {
        id: event.transactionHash,
        previousOwner: event.params.previousOwner,
        newOwner: event.params.newOwner,
        evtBlockTime: event.blockTimestamp,
        evtBlockNum: event.blockNumber,
        contractAddress: event.srcAddress
      };
      context.Ownershiptransferred.set(entity);
    }
  });

