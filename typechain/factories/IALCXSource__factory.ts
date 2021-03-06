/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IALCXSource, IALCXSourceInterface } from "../IALCXSource";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "getStakeTotalDeposited",
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
        name: "_poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IALCXSource__factory {
  static readonly abi = _abi;
  static createInterface(): IALCXSourceInterface {
    return new utils.Interface(_abi) as IALCXSourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IALCXSource {
    return new Contract(address, _abi, signerOrProvider) as IALCXSource;
  }
}
