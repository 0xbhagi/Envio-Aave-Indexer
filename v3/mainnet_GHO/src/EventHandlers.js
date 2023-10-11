/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
let {
  GhoFlashMinterContract,
  GhoTokenContract,
  GhoVarContract,
} = require("../generated/src/Handlers.bs.js");

// FeeUpdated event handler 
GhoFlashMinterContract.FeeUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Feeupdated.load(uniqueId);
});

GhoFlashMinterContract.FeeUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Feeupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldFee: event.params.oldFee,
      newFee: event.params.newFee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Feeupdated.set(entity);
  }
});
// FeesDistributedToTreasury event handler 
GhoFlashMinterContract.FeesDistributedToTreasury.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Feesdistributedtotreasury.load(uniqueId);
});

GhoFlashMinterContract.FeesDistributedToTreasury.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Feesdistributedtotreasury.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      ghoTreasury: event.params.ghoTreasury,
      asset: event.params.asset,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Feesdistributedtotreasury.set(entity);
  }
});
// FeeUpdated event handler 
GhoFlashMinterContract.FlashMint.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Flashmint.load(uniqueId);
});

GhoFlashMinterContract.FlashMint.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Flashmint.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      receiver: event.params.receiver,
      initiator: event.params.initiator,
      asset: event.params.asset,
      amount: event.params.amount,
      fee: event.params.fee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Flashmint.set(entity);
  }
});
// GhoTreasuryUpdated event handler 
GhoFlashMinterContract.GhoTreasuryUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Ghotreasuryupdated.load(uniqueId);
});

GhoFlashMinterContract.GhoTreasuryUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Ghotreasuryupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      oldGhoTreasury: event.params.oldGhoTreasury,
      newGhoTreasury: event.params.newGhoTreasury,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Ghotreasuryupdated.set(entity);
  }
});
// Approval event handler 
GhoTokenContract.Approval.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Approval.load(uniqueId);
});

GhoTokenContract.Approval.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Approval.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Approval.set(entity);
  }
});
// FacilitatorAdded event handler 
GhoTokenContract.FacilitatorAdded.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatoradded.load(uniqueId);
});

GhoTokenContract.FacilitatorAdded.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatoradded.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      label: event.params.label,
      bucketCapacity: event.params.bucketCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatoradded.set(entity);
  }
});
// FacilitatorBucketCapacityUpdated event handler 
GhoTokenContract.FacilitatorBucketCapacityUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorbucketcapacityupdated.load(uniqueId);
});

GhoTokenContract.FacilitatorBucketCapacityUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorbucketcapacityupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      oldCapacity: event.params.oldCapacity,
      newCapacity: event.params.newCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorbucketcapacityupdated.set(entity);
  }
});
// FacilitatorBucketLevelUpdated event handler 
GhoTokenContract.FacilitatorBucketLevelUpdated.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorbucketlevelupdated.load(uniqueId);
});

GhoTokenContract.FacilitatorBucketLevelUpdated.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorbucketlevelupdated.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      oldLevel: event.params.oldLevel,
      newLevel: event.params.newLevel,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorbucketlevelupdated.set(entity);
  }
});
// FacilitatorRemoved event handler 
GhoTokenContract.FacilitatorRemoved.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Facilitatorremoved.load(uniqueId);
});

GhoTokenContract.FacilitatorRemoved.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Facilitatorremoved.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      facilitatorAddress: event.params.facilitatorAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Facilitatorremoved.set(entity);
  }
});
// RoleAdminChanged event handler 
GhoTokenContract.RoleAdminChanged.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Roleadminchanged.load(uniqueId);
});

GhoTokenContract.RoleAdminChanged.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Roleadminchanged.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Roleadminchanged.set(entity);
  }
});
// RoleGranted event handler 
GhoTokenContract.RoleGranted.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rolegranted.load(uniqueId);
});

GhoTokenContract.RoleGranted.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rolegranted.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Rolegranted.set(entity);
  }
});
// RoleRevoked event handler 
GhoTokenContract.RoleRevoked.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Rolerevoked.load(uniqueId);
});

GhoTokenContract.RoleRevoked.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Rolerevoked.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Rolerevoked.set(entity);
  }
});
// Transfer event handler 
GhoTokenContract.Transfer.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Transfer.load(uniqueId);
});

GhoTokenContract.Transfer.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Transfer.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Transfer.set(entity);
  }
});
// Upgraded event handler 
GhoVarContract.Upgraded.loader((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  context.Upgraded.load(uniqueId);
});

GhoVarContract.Upgraded.handler((event, context) => {
  let uniqueId = event.transactionHash + '-' + event.logIndex.toString();
  let entity = context.Upgraded.get(uniqueId);

  if (!entity) {
    entity = {
      id: uniqueId,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress,
      evtTxnHash: event.transactionHash
    };
    context.Upgraded.set(entity);
  }
});