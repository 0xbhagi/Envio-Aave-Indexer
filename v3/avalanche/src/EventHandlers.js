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
// FallbackOracleUpdated Event Handler 
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

// BaseCurrencySet Event Handler 
AaveOracleContract.BaseCurrencySet.loader((event, context) => {
  context.Basecurrencyset.load(event.transactionHash);
});

AaveOracleContract.BaseCurrencySet.handler((event, context) => {
  let entity = context.Basecurrencyset.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Basecurrencyset.set(entity);
  }
});
// AssetSourceUpdated event handler 
PoolContract.AddressesProviderRegistered.loader((event, context) => {
  context.Addressesproviderregistered.load(event.transactionHash);
});

PoolContract.AddressesProviderRegistered.handler((event, context) => {
  let entity = context.Addressesproviderregistered.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Addressesproviderregistered.set(entity);
  }
});

//AddressesProviderUnregistered event handler 
PoolContract.AddressesProviderUnregistered.loader((event, context) => {
  context.Addressesproviderunregistered.load(event.transactionHash);
});

PoolContract.AddressesProviderUnregistered.handler((event, context) => {
  let entity = context.Addressesproviderunregistered.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      addressesProvider: event.params.addressesProvider,
      idValue: event.params.id,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Addressesproviderunregistered.set(entity);
  }
});

// OwnershipTransferred event handler 
PoolContract.OwnershipTransferred.loader((event, context) => {
  context.Ownershiptransferred.load(event.transactionHash);
});

PoolContract.OwnershipTransferred.handler((event, context) => {
  let entity = context.Ownershiptransferred.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Ownershiptransferred.set(entity);
  }
});
// AssetConfigUpdated event handler 
RewardsContract.AssetConfigUpdated.loader((event, context) => {
  context.Assetconfigupdated.load(event.transactionHash);
});

RewardsContract.AssetConfigUpdated.handler((event, context) => {
  let entity = context.Assetconfigupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
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
    };
    context.Assetconfigupdated.set(entity);
  }
});

// Accrued event handler 
RewardsContract.Accrued.loader((event, context) => {
  context.Accrued.load(event.transactionHash);
});

RewardsContract.Accrued.handler((event, context) => {
  let entity = context.Accrued.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      asset: event.params.asset,
      reward: event.params.reward,
      user: event.params.user,
      assetIndex: event.params.assetIndex,
      userIndex: event.params.userIndex,
      rewardsAccrued: event.params.rewardsAccrued,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Accrued.set(entity);
  }
});

// RewardsClaimed event handler 
RewardsContract.RewardsClaimed.loader((event, context) => {
  context.Rewardsclaimed.load(event.transactionHash);
});

RewardsContract.RewardsClaimed.handler((event, context) => {
  let entity = context.Rewardsclaimed.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      user: event.params.user,
      reward: event.params.reward,
      to: event.params.to,
      claimer: event.params.claimer,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Rewardsclaimed.set(entity);
  }
});

// RewardOracleUpdated event handler 
RewardsContract.RewardOracleUpdated.loader((event, context) => {
  context.Rewardoracleupdated.load(event.transactionHash);
});

RewardsContract.RewardOracleUpdated.handler((event, context) => {
  let entity = context.Rewardoracleupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      reward: event.params.reward,
      rewardOracle: event.params.rewardOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Rewardoracleupdated.set(entity);
  }
});

// EmissionManagerUpdated event handler 
RewardsContract.EmissionManagerUpdated.loader((event, context) => {
  context.Emissionmanagerupdated.load(event.transactionHash);
});

RewardsContract.EmissionManagerUpdated.handler((event, context) => {
  let entity = context.Emissionmanagerupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      oldEmissionManager: event.params.oldEmissionManager,
      newEmissionManager: event.params.newEmissionManager,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Emissionmanagerupdated.set(entity);
  }
});

// ClaimerSet event handler 
RewardsContract.ClaimerSet.loader((event, context) => {
  context.Claimerset.load(event.transactionHash);
});

RewardsContract.ClaimerSet.handler((event, context) => {
  let entity = context.Claimerset.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      user: event.params.user,
      claimer: event.params.claimer,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Claimerset.set(entity);
  }
});

// TransferStrategyInstalled event handler 
RewardsContract.TransferStrategyInstalled.loader((event, context) => {
  context.Transferstrategyinstalled.load(event.transactionHash);
});

RewardsContract.TransferStrategyInstalled.handler((event, context) => {
  let entity = context.Transferstrategyinstalled.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      reward: event.params.reward,
      transferStrategy: event.params.transferStrategy,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
    };
    context.Transferstrategyinstalled.set(entity);
  }
});
