module.exports = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "gracePeriod",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minimumDelay",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maximumDelay",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "propositionThreshold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "voteDuration",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "voteDifferential",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minimumQuorum",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      }
    ],
    name: "CancelledAction",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "resultData",
        type: "bytes"
      }
    ],
    name: "ExecutedAction",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256"
      }
    ],
    name: "NewDelay",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address"
      }
    ],
    name: "NewPendingAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      }
    ],
    name: "QueuedAction",
    type: "event"
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINIMUM_QUORUM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ONE_HUNDRED_WITH_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PROPOSITION_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "VOTE_DIFFERENTIAL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "VOTING_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      }
    ],
    name: "cancelTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      }
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getMinimumPropositionPowerNeeded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "votingSupply",
        type: "uint256"
      }
    ],
    name: "getMinimumVotingPowerNeeded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32"
      }
    ],
    name: "isActionQueued",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256"
      }
    ],
    name: "isProposalOverGracePeriod",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256"
      }
    ],
    name: "isProposalPassed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "isPropositionPowerEnough",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256"
      }
    ],
    name: "isQuorumValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256"
      }
    ],
    name: "isVoteDifferentialValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "signature",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool"
      }
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256"
      }
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address"
      }
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "validateCreatorOfProposal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAaveGovernanceV2",
        name: "governance",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "validateProposalCancellation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
