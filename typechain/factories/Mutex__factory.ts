/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Mutex, MutexInterface } from "../Mutex";

const _abi = [
  {
    inputs: [],
    name: "LockAlreadyClaimed",
    type: "error",
  },
];

export class Mutex__factory {
  static readonly abi = _abi;
  static createInterface(): MutexInterface {
    return new utils.Interface(_abi) as MutexInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Mutex {
    return new Contract(address, _abi, signerOrProvider) as Mutex;
  }
}
