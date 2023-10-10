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
  context.Feeupdated.load(event.transactionHash);
});

GhoFlashMinterContract.FeeUpdated.handler((event, context) => {
  let entity = context.Feeupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      oldFee: event.params.oldFee,
      newFee: event.params.newFee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Feeupdated.set(entity);
  }
});
// FeesDistributedToTreasury event handler 
GhoFlashMinterContract.FeesDistributedToTreasury.loader((event, context) => {
  context.Feesdistributedtotreasury.load(event.transactionHash);
});

GhoFlashMinterContract.FeesDistributedToTreasury.handler((event, context) => {
  let entity = context.Feesdistributedtotreasury.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      ghoTreasury: event.params.ghoTreasury,
      asset: event.params.asset,
      amount: event.params.amount,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Feesdistributedtotreasury.set(entity);
  }
});
// FeeUpdated event handler 
GhoFlashMinterContract.FlashMint.loader((event, context) => {
  context.Flashmint.load(event.transactionHash);
});

GhoFlashMinterContract.FlashMint.handler((event, context) => {
  let entity = context.Flashmint.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      receiver: event.params.receiver,
      initiator: event.params.initiator,
      asset: event.params.asset,
      amount: event.params.amount,
      fee: event.params.fee,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Flashmint.set(entity);
  }
});
// GhoTreasuryUpdated event handler 
GhoFlashMinterContract.GhoTreasuryUpdated.loader((event, context) => {
  context.Ghotreasuryupdated.load(event.transactionHash);
});

GhoFlashMinterContract.GhoTreasuryUpdated.handler((event, context) => {
  let entity = context.Ghotreasuryupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      oldGhoTreasury: event.params.oldGhoTreasury,
      newGhoTreasury: event.params.newGhoTreasury,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Ghotreasuryupdated.set(entity);
  }
});
// Approval event handler 
GhoTokenContract.Approval.loader((event, context) => {
  context.Approval.load(event.transactionHash);
});

GhoTokenContract.Approval.handler((event, context) => {
  let entity = context.Approval.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Approval.set(entity);
  }
});
// FacilitatorAdded event handler 
GhoTokenContract.FacilitatorAdded.loader((event, context) => {
  context.Facilitatoradded.load(event.transactionHash);
});

GhoTokenContract.FacilitatorAdded.handler((event, context) => {
  let entity = context.Facilitatoradded.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      facilitatorAddress: event.params.facilitatorAddress,
      label: event.params.label,
      bucketCapacity: event.params.bucketCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Facilitatoradded.set(entity);
  }
});
// FacilitatorBucketCapacityUpdated event handler 
GhoTokenContract.FacilitatorBucketCapacityUpdated.loader((event, context) => {
  context.Facilitatorbucketcapacityupdated.load(event.transactionHash);
});

GhoTokenContract.FacilitatorBucketCapacityUpdated.handler((event, context) => {
  let entity = context.Facilitatorbucketcapacityupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      facilitatorAddress: event.params.facilitatorAddress,
      oldCapacity: event.params.oldCapacity,
      newCapacity: event.params.newCapacity,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Facilitatorbucketcapacityupdated.set(entity);
  }
});
// FacilitatorBucketLevelUpdated event handler 
GhoTokenContract.FacilitatorBucketLevelUpdated.loader((event, context) => {
  context.Facilitatorbucketlevelupdated.load(event.transactionHash);
});

GhoTokenContract.FacilitatorBucketLevelUpdated.handler((event, context) => {
  let entity = context.Facilitatorbucketlevelupdated.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      facilitatorAddress: event.params.facilitatorAddress,
      oldLevel: event.params.oldLevel,
      newLevel: event.params.newLevel,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Facilitatorbucketlevelupdated.set(entity);
  }
});
// FacilitatorRemoved event handler 
GhoTokenContract.FacilitatorRemoved.loader((event, context) => {
  context.Facilitatorremoved.load(event.transactionHash);
});

GhoTokenContract.FacilitatorRemoved.handler((event, context) => {
  let entity = context.Facilitatorremoved.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      facilitatorAddress: event.params.facilitatorAddress,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Facilitatorremoved.set(entity);
  }
});
// RoleAdminChanged event handler 
GhoTokenContract.RoleAdminChanged.loader((event, context) => {
  context.Roleadminchanged.load(event.transactionHash);
});

GhoTokenContract.RoleAdminChanged.handler((event, context) => {
  let entity = context.Roleadminchanged.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Roleadminchanged.set(entity);
  }
});
// RoleGranted event handler 
GhoTokenContract.RoleGranted.loader((event, context) => {
  context.Rolegranted.load(event.transactionHash);
});

GhoTokenContract.RoleGranted.handler((event, context) => {
  let entity = context.Rolegranted.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Rolegranted.set(entity);
  }
});
// RoleRevoked event handler 
GhoTokenContract.RoleRevoked.loader((event, context) => {
  context.Rolerevoked.load(event.transactionHash);
});

GhoTokenContract.RoleRevoked.handler((event, context) => {
  let entity = context.Rolerevoked.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      role: event.params.role,
      account: event.params.account,
      sender: event.params.sender,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Rolerevoked.set(entity);
  }
});
// Transfer event handler 
GhoTokenContract.Transfer.loader((event, context) => {
  context.Transfer.load(event.transactionHash);
});

GhoTokenContract.Transfer.handler((event, context) => {
  let entity = context.Transfer.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Transfer.set(entity);
  }
});
// Upgraded event handler 
GhoVarContract.Upgraded.loader((event, context) => {
  context.Upgraded.load(event.transactionHash);
});

GhoVarContract.Upgraded.handler((event, context) => {
  let entity = context.Upgraded.get(event.transactionHash);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      role: event.params.role,
      previousAdminRole: event.params.previousAdminRole,
      newAdminRole: event.params.newAdminRole,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
    context.Upgraded.set(entity);
  }
});