/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TransmuterV2Interface extends ethers.utils.Interface {
  functions: {
    "ADMIN()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "SENTINEL()": FunctionFragment;
    "ZERO_ADDRESS()": FunctionFragment;
    "buffer()": FunctionFragment;
    "claim(uint256,address)": FunctionFragment;
    "conversionFactor()": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "exchange(uint256)": FunctionFragment;
    "getClaimableBalance(address)": FunctionFragment;
    "getExchangedBalance(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getUnexchangedBalance(address)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "isPaused()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setCollateralSource(address)": FunctionFragment;
    "setPause(bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "syntheticToken()": FunctionFragment;
    "totalBuffered()": FunctionFragment;
    "totalUnexchanged()": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "version()": FunctionFragment;
    "whitelist()": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SENTINEL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ZERO_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "conversionFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getExchangedBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnexchangedBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollateralSource",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "syntheticToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBuffered",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalUnexchanged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SENTINEL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "conversionFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchangedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnexchangedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCollateralSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syntheticToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBuffered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUnexchanged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AdminUpdated(address)": EventFragment;
    "Claim(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256)": EventFragment;
    "Exchange(address,uint256)": EventFragment;
    "Paused(bool)": EventFragment;
    "PendingAdminUpdated(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AdminUpdatedEvent = TypedEvent<[string] & { admin: string }>;

export type ClaimEvent = TypedEvent<
  [string, string, BigNumber] & {
    sender: string;
    recipient: string;
    amount: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber] & {
    sender: string;
    owner: string;
    amount: BigNumber;
  }
>;

export type ExchangeEvent = TypedEvent<
  [string, BigNumber] & { sender: string; amount: BigNumber }
>;

export type PausedEvent = TypedEvent<[boolean] & { flag: boolean }>;

export type PendingAdminUpdatedEvent = TypedEvent<
  [string] & { pendingAdmin: string }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber] & {
    sender: string;
    recipient: string;
    amount: BigNumber;
  }
>;

export class TransmuterV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TransmuterV2Interface;

  functions: {
    ADMIN(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    SENTINEL(overrides?: CallOverrides): Promise<[string]>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    buffer(overrides?: CallOverrides): Promise<[string]>;

    claim(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    conversionFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaimableBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { claimableBalance: BigNumber }>;

    getExchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { exchangedBalance: BigNumber }>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getUnexchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { unexchangedBalance: BigNumber }>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _syntheticToken: string,
      _underlyingToken: string,
      _buffer: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPaused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCollateralSource(
      _newCollateralSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPause(
      pauseState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    syntheticToken(overrides?: CallOverrides): Promise<[string]>;

    totalBuffered(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalUnexchanged(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    whitelist(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADMIN(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  SENTINEL(overrides?: CallOverrides): Promise<string>;

  ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

  buffer(overrides?: CallOverrides): Promise<string>;

  claim(
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  conversionFactor(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaimableBalance(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getExchangedBalance(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getUnexchangedBalance(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _syntheticToken: string,
    _underlyingToken: string,
    _buffer: string,
    _whitelist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPaused(overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCollateralSource(
    _newCollateralSource: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPause(
    pauseState: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  syntheticToken(overrides?: CallOverrides): Promise<string>;

  totalBuffered(overrides?: CallOverrides): Promise<BigNumber>;

  totalUnexchanged(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  whitelist(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADMIN(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    SENTINEL(overrides?: CallOverrides): Promise<string>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

    buffer(overrides?: CallOverrides): Promise<string>;

    claim(
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    conversionFactor(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    exchange(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getClaimableBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getUnexchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _syntheticToken: string,
      _underlyingToken: string,
      _buffer: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPaused(overrides?: CallOverrides): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCollateralSource(
      _newCollateralSource: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPause(pauseState: boolean, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    syntheticToken(overrides?: CallOverrides): Promise<string>;

    totalBuffered(overrides?: CallOverrides): Promise<BigNumber>;

    totalUnexchanged(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;

    whitelist(overrides?: CallOverrides): Promise<string>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminUpdated(address)"(
      admin?: null
    ): TypedEventFilter<[string], { admin: string }>;

    AdminUpdated(admin?: null): TypedEventFilter<[string], { admin: string }>;

    "Claim(address,address,uint256)"(
      sender?: string | null,
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; recipient: string; amount: BigNumber }
    >;

    Claim(
      sender?: string | null,
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; recipient: string; amount: BigNumber }
    >;

    "Deposit(address,address,uint256)"(
      sender?: string | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; owner: string; amount: BigNumber }
    >;

    Deposit(
      sender?: string | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; owner: string; amount: BigNumber }
    >;

    "Exchange(address,uint256)"(
      sender?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    Exchange(
      sender?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; amount: BigNumber }
    >;

    "Paused(bool)"(flag?: null): TypedEventFilter<[boolean], { flag: boolean }>;

    Paused(flag?: null): TypedEventFilter<[boolean], { flag: boolean }>;

    "PendingAdminUpdated(address)"(
      pendingAdmin?: null
    ): TypedEventFilter<[string], { pendingAdmin: string }>;

    PendingAdminUpdated(
      pendingAdmin?: null
    ): TypedEventFilter<[string], { pendingAdmin: string }>;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "Withdraw(address,address,uint256)"(
      sender?: string | null,
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; recipient: string; amount: BigNumber }
    >;

    Withdraw(
      sender?: string | null,
      recipient?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; recipient: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    SENTINEL(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    buffer(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    conversionFactor(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaimableBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnexchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _syntheticToken: string,
      _underlyingToken: string,
      _buffer: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPaused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCollateralSource(
      _newCollateralSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPause(
      pauseState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syntheticToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalBuffered(overrides?: CallOverrides): Promise<BigNumber>;

    totalUnexchanged(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SENTINEL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    conversionFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaimableBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnexchangedBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _syntheticToken: string,
      _underlyingToken: string,
      _buffer: string,
      _whitelist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCollateralSource(
      _newCollateralSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPause(
      pauseState: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    syntheticToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalBuffered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalUnexchanged(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
