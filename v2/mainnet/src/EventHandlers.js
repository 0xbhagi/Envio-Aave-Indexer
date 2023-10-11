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
  context.Assetsourceupdated.load(event.transactionHash);
});

AaveOracleContract.AssetSourceUpdated.handler((event, context) => {
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
AaveOracleContract.FallbackOracleUpdated.loader((event, context) => {
  context.Fallbackoracleupdated.load(event.transactionHash);
});

AaveOracleContract.FallbackOracleUpdated.handler((event, context) => {
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
AaveOracleContract.OwnershipTransferred.loader((event, context) => {
  context.Ownershiptransferred.load(event.transactionHash);
});

AaveOracleContract.OwnershipTransferred.handler((event, context) => {
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
AaveOracleContract.WethSet.loader((event, context) => {
  context.Wethset.load(event.transactionHash);
});

AaveOracleContract.WethSet.handler((event, context) => {
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
// ABIChanged event handler 
ResolverContract.ABIChanged.loader((event, context) => {
  context.Abichanged.load(event.transactionHash);
});

ResolverContract.ABIChanged.handler((event, context) => {
  let entity = context.Abichanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      contentType: event.params.contentType,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Abichanged.set(entity);
  }
});
// AddrChanged event handler 
ResolverContract.AddrChanged.loader((event, context) => {
  context.Addrchanged.load(event.transactionHash);
});

ResolverContract.AddrChanged.handler((event, context) => {
  let entity = context.Addrchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      a: event.params.a,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Addrchanged.set(entity);
  }
});
// AddressChanged event handler 
ResolverContract.AddressChanged.loader((event, context) => {
  context.Addresschanged.load(event.transactionHash);
});

ResolverContract.AddressChanged.handler((event, context) => {
  let entity = context.Addresschanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      coinType: event.params.coinType,
      newAddress: event.params.newAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Addresschanged.set(entity);
  }
});
// AuthorisationChanged event handler 
ResolverContract.AuthorisationChanged.loader((event, context) => {
  context.Authorisationchanged.load(event.transactionHash);
});

ResolverContract.AuthorisationChanged.handler((event, context) => {
  let entity = context.Authorisationchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      owner: event.params.owner,
      target: event.params.target,
      isAuthorised: event.params.isAuthorised,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Authorisationchanged.set(entity);
  }
});
// ContenthashChanged event handler 
ResolverContract.ContenthashChanged.loader((event, context) => {
  context.Contenthashchanged.load(event.transactionHash);
});

ResolverContract.ContenthashChanged.handler((event, context) => {
  let entity = context.Contenthashchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      hash: event.params.hash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Contenthashchanged.set(entity);
  }
});
// DNSRecordChanged event handler 
ResolverContract.DNSRecordChanged.loader((event, context) => {
  context.Dnsrecordchanged.load(event.transactionHash);
});

ResolverContract.DNSRecordChanged.handler((event, context) => {
  let entity = context.Dnsrecordchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      record: event.params.record,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Dnsrecordchanged.set(entity);
  }
});
// DNSRecordDeleted event handler 
ResolverContract.DNSRecordDeleted.loader((event, context) => {
  context.Dnsrecorddeleted.load(event.transactionHash);
});

ResolverContract.DNSRecordDeleted.handler((event, context) => {
  let entity = context.Dnsrecorddeleted.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      name: event.params.name,
      resource: event.params.resource,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Dnsrecorddeleted.set(entity);
  }
});
// DNSZoneCleared event handler 
ResolverContract.DNSZoneCleared.loader((event, context) => {
  context.Dnszonecleared.load(event.transactionHash);
});

ResolverContract.DNSZoneCleared.handler((event, context) => {
  let entity = context.Dnszonecleared.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Dnszonecleared.set(entity);
  }
});
// DNSZonehashChanged event handler 
ResolverContract.DNSZonehashChanged.loader((event, context) => {
  context.Dnszonehashchanged.load(event.transactionHash);
});

ResolverContract.DNSZonehashChanged.handler((event, context) => {
  let entity = context.Dnszonehashchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      lastzonehash: event.params.lastzonehash,
      zonehash: event.params.zonehash,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Dnszonehashchanged.set(entity);
  }
});
// InterfaceChanged event handler 
ResolverContract.InterfaceChanged.loader((event, context) => {
  context.Interfacechanged.load(event.transactionHash);
});

ResolverContract.InterfaceChanged.handler((event, context) => {
  let entity = context.Interfacechanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      interfaceID: event.params.interfaceID,
      implementer: event.params.implementer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Interfacechanged.set(entity);
  }
});
// NameChanged event handler 
ResolverContract.NameChanged.loader((event, context) => {
  context.Namechanged.load(event.transactionHash);
});

ResolverContract.NameChanged.handler((event, context) => {
  let entity = context.Namechanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      name: event.params.name,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Namechanged.set(entity);
  }
});
// PubkeyChanged event handler 
ResolverContract.PubkeyChanged.loader((event, context) => {
  context.Pubkeychanged.load(event.transactionHash);
});

ResolverContract.PubkeyChanged.handler((event, context) => {
  let entity = context.Pubkeychanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      x: event.params.x,
      y: event.params.y,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Pubkeychanged.set(entity);
  }
});
// TextChanged event handler 
ResolverContract.TextChanged.loader((event, context) => {
  context.Textchanged.load(event.transactionHash);
});

ResolverContract.TextChanged.handler((event, context) => {
  let entity = context.Textchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      node: event.params.node,
      indexedKey: event.params.indexedKey,
      key: event.params.key,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Textchanged.set(entity);
  }
});
// AggregatorUpdated event handler 
SourcesRegistryContract.AggregatorUpdated.loader((event, context) => {
  context.Aggregatorupdated.load(event.transactionHash);
});

SourcesRegistryContract.AggregatorUpdated.handler((event, context) => {
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
ProviderRegistryContract.AddressesProviderRegistered.loader((event, context) => {
  context.Addressesproviderregistered.load(event.transactionHash);
});

ProviderRegistryContract.AddressesProviderRegistered.handler((event, context) => {
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
ProviderRegistryContract.AddressesProviderUnregistered.loader((event, context) => {
  context.Addressesproviderunregistered.load(event.transactionHash);
});

ProviderRegistryContract.AddressesProviderUnregistered.handler((event, context) => {
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
ProviderRegistryContract.OwnershipTransferred.loader((event, context) => {
  context.Ownershiptransferred.load(event.transactionHash);
});

ProviderRegistryContract.OwnershipTransferred.handler((event, context) => {
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
// AssetSourceUpdated event handler 
OracleAnchorContract.AssetSourceUpdated.loader((event, context) => {
  context.Assetsourceupdated.load(event.transactionHash);
});

OracleAnchorContract.AssetSourceUpdated.handler((event, context) => {
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
// OwnershipTransferred event handler 
SwapAdapterContract.OwnershipTransferred.loader((event, context) => {
  context.Ownershiptransferred.load(event.transactionHash);
});

SwapAdapterContract.OwnershipTransferred.handler((event, context) => {
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

// Swapped event handler 
SwapAdapterContract.Swapped.loader((event, context) => {
  context.Swapped.load(event.transactionHash);
});

SwapAdapterContract.Swapped.handler((event, context) => {
  let entity = context.Swapped.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Swapped.set(entity);
  }
});

// OwnershipTransferred event handler 
UniswapRepayAdapterContract.OwnershipTransferred.loader((event, context) => {
  context.Ownershiptransferred.load(event.transactionHash);
});

UniswapRepayAdapterContract.OwnershipTransferred.handler((event, context) => {
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

// Swapped event handler 
UniswapRepayAdapterContract.Swapped.loader((event, context) => {
  context.Swapped.load(event.transactionHash);
});

UniswapRepayAdapterContract.Swapped.handler((event, context) => {
  let entity = context.Swapped.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      fromAsset: event.params.fromAsset,
      toAsset: event.params.toAsset,
      fromAmount: event.params.fromAmount,
      receivedAmount: event.params.receivedAmount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Swapped.set(entity);
  }
});




