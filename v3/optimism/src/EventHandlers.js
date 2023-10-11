/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
let {
  RewardsContract,
  AaveOracleContract,
  PoolContract,
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

// FallbackOracleUpdated Event Handler 
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

// BaseCurrencySet Event Handler 
AaveOracleContract.BaseCurrencySet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Basecurrencyset.load(uniqueId);
});

AaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Basecurrencyset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
PoolContract.AddressesProviderRegistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderregistered.load(uniqueId);
});

PoolContract.AddressesProviderRegistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
PoolContract.AddressesProviderUnregistered.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Addressesproviderunregistered.load(uniqueId);
});

PoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Addressesproviderunregistered.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
PoolContract.OwnershipTransferred.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ownershiptransferred.load(uniqueId);
});

PoolContract.OwnershipTransferred.handler((event, context) => {
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
      evtTxnHash: event.transactionHash,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
RewardsContract.AssetConfigUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Assetconfigupdated.load(uniqueId);
});

RewardsContract.AssetConfigUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Assetconfigupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      oldEmission: event.params.oldEmission,
      newEmission: event.params.newEmission,
      oldDistributionEnd: event.params.oldDistributionEnd,
      newDistributionEnd: event.params.newDistributionEnd,
      assetIndex: event.params.assetIndex,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
RewardsContract.Accrued.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Accrued.load(uniqueId);
});

RewardsContract.Accrued.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Accrued.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
RewardsContract.RewardsClaimed.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardsclaimed.load(uniqueId);
});

RewardsContract.RewardsClaimed.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardsclaimed.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
RewardsContract.RewardOracleUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rewardoracleupdated.load(uniqueId);
});

RewardsContract.RewardOracleUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rewardoracleupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
RewardsContract.EmissionManagerUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Emissionmanagerupdated.load(uniqueId);
});

RewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Emissionmanagerupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
RewardsContract.ClaimerSet.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Claimerset.load(uniqueId);
});

RewardsContract.ClaimerSet.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Claimerset.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
RewardsContract.TransferStrategyInstalled.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transferstrategyinstalled.load(uniqueId);
});

RewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transferstrategyinstalled.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});
