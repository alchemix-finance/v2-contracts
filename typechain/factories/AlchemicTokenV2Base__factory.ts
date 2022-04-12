/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AlchemicTokenV2Base,
  AlchemicTokenV2BaseInterface,
} from "../AlchemicTokenV2Base";

const _abi = [
  {
    inputs: [],
    name: "IllegalArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalState",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "SetFlashMintFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLBACK_SUCCESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SENTINEL_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flashMintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "lowerHasMinted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFlashLoanAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintCeiling",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "pauseMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maximum",
        type: "uint256",
      },
    ],
    name: "setCeiling",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "setFlashFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFlashLoanAmount",
        type: "uint256",
      },
    ],
    name: "setMaxFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sentinel",
        type: "address",
      },
    ],
    name: "setSentinel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c28806100206000396000f3fe608060405234801561001057600080fd5b50600436106102525760003560e01c8063613255ab11610146578063a140edb4116100c3578063d547741f11610087578063d547741f14610542578063d936547e14610555578063d9d98ce414610578578063dd62ed3e1461058b578063e68b14ff146105c4578063ee7a069a146105d757600080fd5b8063a140edb4146104f7578063a217fddf14610501578063a457c2d714610509578063a6beee4a1461051c578063a9059cbb1461052f57600080fd5b80638237e5381161010a5780638237e53814610499578063907a267b146104c057806391d14854146104d3578063940a1dc0146104e657806395d89b41146104ef57600080fd5b8063613255ab146104225780636c00c7f01461043557806370a082311461044857806375b238fc1461047157806379cc67901461048657600080fd5b8063288aafcb116101d4578063395093511161019857806339509351146103c357806340c10f19146103d657806342966c68146103e957806353d6fd59146103fc5780635cffe9de1461040f57600080fd5b8063288aafcb146103585780632e48152c1461036b5780632f2ff15d1461038e578063313ce567146103a157806336568abe146103b057600080fd5b806313430d921161021b57806313430d92146102ea57806318160ddd1461031157806323b872dd14610319578063248a9ca31461032c578063249d39e91461034f57600080fd5b80623d47901461025757806301ffc9a71461028a57806306fdde03146102ad578063095ea7b3146102c257806309dac061146102d5575b600080fd5b610277610265366004611788565b60fe6020526000908152604090205481565b6040519081526020015b60405180910390f35b61029d6102983660046117a5565b6105f7565b6040519015158152602001610281565b6102b561062e565b60405161028191906117fb565b61029d6102d036600461182e565b6106c0565b6102e86102e3366004611788565b6106d6565b005b6102777fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b09277065681565b603554610277565b61029d61032736600461185a565b610737565b61027761033a36600461189b565b60009081526097602052604090206001015490565b61027761271081565b6102e861036636600461189b565b6107e6565b61029d610379366004611788565b60fc6020526000908152604090205460ff1681565b6102e861039c3660046118b4565b610843565b60405160128152602001610281565b6102e86103be3660046118b4565b61086e565b61029d6103d136600461182e565b6108ec565b6102e86103e436600461182e565b610928565b6102e86103f736600461189b565b6109f1565b6102e861040a3660046118e4565b6109fb565b61029d61041d366004611917565b610a5a565b610277610430366004611788565b610bfd565b6102e861044336600461182e565b610c20565b610277610456366004611788565b6001600160a01b031660009081526033602052604090205490565b610277600080516020611bd383398151915281565b6102e861049436600461182e565b610c70565b6102777f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd981565b6102e86104ce36600461189b565b610cb6565b61029d6104e13660046118b4565b610d25565b61027760ff5481565b6102b5610d50565b6102776101005481565b610277600081565b61029d61051736600461182e565b610d5f565b6102e861052a36600461189b565b610df8565b61029d61053d36600461182e565b610e32565b6102e86105503660046118b4565b610e3f565b61029d610563366004611788565b60fb6020526000908152604090205460ff1681565b61027761058636600461182e565b610e65565b6102776105993660046119b6565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6102e86105d23660046118e4565b610eb2565b6102776105e5366004611788565b60fd6020526000908152604090205481565b60006001600160e01b03198216637965db0b60e01b148061062857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606036805461063d906119e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610669906119e4565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b5050505050905090565b60006106cd338484610f5b565b50600192915050565b6106ee600080516020611bd383398151915233610d25565b61070a576040516282b42960e81b815260040160405180910390fd5b6107347fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b0927706568261107f565b50565b6000610744848484611089565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156107ce5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6107db8533858403610f5b565b506001949350505050565b33600090815260fb602052604090205460ff16610815576040516282b42960e81b815260040160405180910390fd5b33600090815260fe6020526040902054610830908290611a35565b33600090815260fe602052604090205550565b60008281526097602052604090206001015461085f8133611259565b61086983836112bd565b505050565b6001600160a01b03811633146108de5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016107c5565b6108e88282611343565b5050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916106cd918590610923908690611a4c565b610f5b565b33600090815260fb602052604090205460ff16610957576040516282b42960e81b815260040160405180910390fd5b33600090815260fc602052604090205460ff161561098857604051634a613c4160e01b815260040160405180910390fd5b33600090815260fe60205260408120546109a29083611a4c565b33600090815260fd60205260409020549091508111156109d557604051634a613c4160e01b815260040160405180910390fd5b33600090815260fe6020526040902081905561086983836113aa565b6107343382611489565b610a13600080516020611bd383398151915233610d25565b610a2f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0391909116600090815260fb60205260409020805460ff1916911515919091179055565b6000600260c9541415610aaf5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107c5565b600260c9556001600160a01b0385163014610add57604051630134249960e71b815260040160405180910390fd5b610ae685610bfd565b841115610b0657604051630134249960e71b815260040160405180910390fd5b6000610b128686610e65565b9050610b1e87866113aa565b6040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9906001600160a01b038916906323e30c8b90610b769033908b908b9088908c908c90600401611a64565b6020604051808303816000875af1158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb99190611ac0565b14610bd757604051634a613c4160e01b815260040160405180910390fd5b610bea87610be58388611a4c565b611489565b6001915050600160c95595945050505050565b60006001600160a01b0382163014610c1757506000919050565b50506101005490565b610c38600080516020611bd383398151915233610d25565b610c54576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03909116600090815260fd6020526040902055565b6001600160a01b0382166000908152603460209081526040808320338452909152812054610c9f908390611a35565b9050610cac833383610f5b565b6108698383611489565b610cce600080516020611bd383398151915233610d25565b610cea576040516282b42960e81b815260040160405180910390fd5b60ff8190556040518181527f2a870645d0d1cf8866b52d71ff02db01b3e1dc4b70f53e2c4e85dbe60969b92e9060200160405180910390a150565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606037805461063d906119e4565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015610de15760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016107c5565b610dee3385858403610f5b565b5060019392505050565b610e10600080516020611bd383398151915233610d25565b610e2c576040516282b42960e81b815260040160405180910390fd5b61010055565b60006106cd338484611089565b600082815260976020526040902060010154610e5b8133611259565b6108698383611343565b60006001600160a01b0383163014610e9057604051630134249960e71b815260040160405180910390fd5b61271060ff5483610ea19190611ad9565b610eab9190611af8565b9392505050565b610edc7fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b09277065633610d25565b610ef8576040516282b42960e81b815260040160405180910390fd5b6001600160a01b038216600081815260fc6020908152604091829020805460ff19168515159081179091558251938452908301527fe8699cf681560fd07de85543bd994263f4557bdc5179dd702f256d15fd083e1d910160405180910390a15050565b6001600160a01b038316610fbd5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016107c5565b6001600160a01b03821661101e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016107c5565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6108e882826112bd565b6001600160a01b0383166110ed5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016107c5565b6001600160a01b03821661114f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016107c5565b6001600160a01b038316600090815260336020526040902054818110156111c75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016107c5565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906111fe908490611a4c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161124a91815260200190565b60405180910390a35b50505050565b6112638282610d25565b6108e85761127b816001600160a01b031660146115d7565b6112868360206115d7565b604051602001611297929190611b1a565b60408051601f198184030181529082905262461bcd60e51b82526107c5916004016117fb565b6112c78282610d25565b6108e85760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556112ff3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61134d8282610d25565b156108e85760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b0382166114005760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016107c5565b80603560008282546114129190611a4c565b90915550506001600160a01b0382166000908152603360205260408120805483929061143f908490611a4c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166114e95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016107c5565b6001600160a01b0382166000908152603360205260409020548181101561155d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016107c5565b6001600160a01b038316600090815260336020526040812083830390556035805484929061158c908490611a35565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b606060006115e6836002611ad9565b6115f1906002611a4c565b67ffffffffffffffff81111561160957611609611b8f565b6040519080825280601f01601f191660200182016040528015611633576020820181803683370190505b509050600360fc1b8160008151811061164e5761164e611ba5565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061167d5761167d611ba5565b60200101906001600160f81b031916908160001a90535060006116a1846002611ad9565b6116ac906001611a4c565b90505b6001811115611724576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106116e0576116e0611ba5565b1a60f81b8282815181106116f6576116f6611ba5565b60200101906001600160f81b031916908160001a90535060049490941c9361171d81611bbb565b90506116af565b508315610eab5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107c5565b6001600160a01b038116811461073457600080fd5b60006020828403121561179a57600080fd5b8135610eab81611773565b6000602082840312156117b757600080fd5b81356001600160e01b031981168114610eab57600080fd5b60005b838110156117ea5781810151838201526020016117d2565b838111156112535750506000910152565b602081526000825180602084015261181a8160408501602087016117cf565b601f01601f19169190910160400192915050565b6000806040838503121561184157600080fd5b823561184c81611773565b946020939093013593505050565b60008060006060848603121561186f57600080fd5b833561187a81611773565b9250602084013561188a81611773565b929592945050506040919091013590565b6000602082840312156118ad57600080fd5b5035919050565b600080604083850312156118c757600080fd5b8235915060208301356118d981611773565b809150509250929050565b600080604083850312156118f757600080fd5b823561190281611773565b9150602083013580151581146118d957600080fd5b60008060008060006080868803121561192f57600080fd5b853561193a81611773565b9450602086013561194a81611773565b935060408601359250606086013567ffffffffffffffff8082111561196e57600080fd5b818801915088601f83011261198257600080fd5b81358181111561199157600080fd5b8960208285010111156119a357600080fd5b9699959850939650602001949392505050565b600080604083850312156119c957600080fd5b82356119d481611773565b915060208301356118d981611773565b600181811c908216806119f857607f821691505b60208210811415611a1957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a4757611a47611a1f565b500390565b60008219821115611a5f57611a5f611a1f565b500190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b600060208284031215611ad257600080fd5b5051919050565b6000816000190483118215151615611af357611af3611a1f565b500290565b600082611b1557634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611b528160178501602088016117cf565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611b838160288401602088016117cf565b01602801949350505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611bca57611bca611a1f565b50600019019056fedf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42a2646970667358221220abe0fee592cb932de272352f8fdc18a5e618acb78e71874f10108de4f7b8c27364736f6c634300080b0033";

export class AlchemicTokenV2Base__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlchemicTokenV2Base> {
    return super.deploy(overrides || {}) as Promise<AlchemicTokenV2Base>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlchemicTokenV2Base {
    return super.attach(address) as AlchemicTokenV2Base;
  }
  connect(signer: Signer): AlchemicTokenV2Base__factory {
    return super.connect(signer) as AlchemicTokenV2Base__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlchemicTokenV2BaseInterface {
    return new utils.Interface(_abi) as AlchemicTokenV2BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlchemicTokenV2Base {
    return new Contract(address, _abi, signerOrProvider) as AlchemicTokenV2Base;
  }
}