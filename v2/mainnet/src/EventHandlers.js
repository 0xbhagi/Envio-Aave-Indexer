/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
 let {
  AaveOracleContract,
  ResolverContract,
  SourcesRegistryContract,
  ProviderRegistryContract,
  OracleAnchorContract,
  SwapAdapterContract,
  UniswapRepayAdapterContract,
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
// ABIChanged event handler 
ResolverContract.ABIChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Abichanged.load(uniqueId);
});

ResolverContract.ABIChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Abichanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      contentType: event.params.contentType,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Abichanged.set(entity);
  }
});
// AddrChanged event handler 
ResolverContract.AddrChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addrchanged.load(uniqueId);
});

ResolverContract.AddrChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addrchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      a: event.params.a,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addrchanged.set(entity);
  }
});
// AddressChanged event handler 
ResolverContract.AddressChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addresschanged.load(uniqueId);
});

ResolverContract.AddressChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addresschanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      coinType: event.params.coinType,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Addresschanged.set(entity);
  }
});
// AuthorisationChanged event handler 
ResolverContract.AuthorisationChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Authorisationchanged.load(uniqueId);
});

ResolverContract.AuthorisationChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Authorisationchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      owner: event.params.owner,
      target: event.params.target,
      isAuthorised: event.params.isAuthorised,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Authorisationchanged.set(entity);
  }
});
// ContenthashChanged event handler 
ResolverContract.ContenthashChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Contenthashchanged.load(uniqueId);
});

ResolverContract.ContenthashChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Contenthashchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      hash: event.params.hash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Contenthashchanged.set(entity);
  }
});
// DNSRecordChanged event handler 
ResolverContract.DNSRecordChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnsrecordchanged.load(uniqueId);
});

ResolverContract.DNSRecordChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnsrecordchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      record: event.params.record,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnsrecordchanged.set(entity);
  }
});
// DNSRecordDeleted event handler 
ResolverContract.DNSRecordDeleted.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnsrecorddeleted.load(uniqueId);
});

ResolverContract.DNSRecordDeleted.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnsrecorddeleted.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnsrecorddeleted.set(entity);
  }
});
// DNSZoneCleared event handler 
ResolverContract.DNSZoneCleared.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnszonecleared.load(uniqueId);
});

ResolverContract.DNSZoneCleared.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnszonecleared.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnszonecleared.set(entity);
  }
});
// DNSZonehashChanged event handler 
ResolverContract.DNSZonehashChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Dnszonehashchanged.load(uniqueId);
});

ResolverContract.DNSZonehashChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Dnszonehashchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      lastzonehash: event.params.lastzonehash,
      zonehash: event.params.zonehash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Dnszonehashchanged.set(entity);
  }
});
// InterfaceChanged event handler 
ResolverContract.InterfaceChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Interfacechanged.load(uniqueId);
});

ResolverContract.InterfaceChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Interfacechanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      interfaceID: event.params.interfaceID,
      implementer: event.params.implementer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Interfacechanged.set(entity);
  }
});
// NameChanged event handler 
ResolverContract.NameChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Namechanged.load(uniqueId);
});

ResolverContract.NameChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Namechanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      name: event.params.name,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Namechanged.set(entity);
  }
});
// PubkeyChanged event handler 
ResolverContract.PubkeyChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Pubkeychanged.load(uniqueId);
});

ResolverContract.PubkeyChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Pubkeychanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      x: event.params.x,
      y: event.params.y,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Pubkeychanged.set(entity);
  }
});
// TextChanged event handler 
ResolverContract.TextChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Textchanged.load(uniqueId);
});

ResolverContract.TextChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Textchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      node: event.params.node,
      indexedKey: event.params.indexedKey,
      key: event.params.key,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Textchanged.set(entity);
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
// AssetSourceUpdated event handler 
OracleAnchorContract.AssetSourceUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Oassetsourceupdated.load(uniqueId);
});

OracleAnchorContract.AssetSourceUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Oassetsourceupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      token: event.params.token,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Oassetsourceupdated.set(entity);
  }
});
// OwnershipTransferred event handler 
SwapAdapterContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

SwapAdapterContract.OwnershipTransferred.handler((event, context) => {
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

// Swapped event handler 
SwapAdapterContract.Swapped.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Swapped.load(uniqueId);
});

SwapAdapterContract.Swapped.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Swapped.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Swapped.set(entity);
  }
});

// OwnershipTransferred event handler 
UniswapRepayAdapterContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

UniswapRepayAdapterContract.OwnershipTransferred.handler((event, context) => {
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

// Swapped event handler 
UniswapRepayAdapterContract.Swapped.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Swapped.load(uniqueId);
});

UniswapRepayAdapterContract.Swapped.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Swapped.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Swapped.set(entity);
  }
});