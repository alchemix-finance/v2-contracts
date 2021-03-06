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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IAlchemistV2StateInterface extends ethers.utils.Interface {
  functions: {
    "accounts(address)": FunctionFragment;
    "admin()": FunctionFragment;
    "getLiquidationLimitInfo(address)": FunctionFragment;
    "getMintLimitInfo()": FunctionFragment;
    "getRepayLimitInfo(address)": FunctionFragment;
    "getSupportedUnderlyingTokens()": FunctionFragment;
    "getSupportedYieldTokens()": FunctionFragment;
    "getUnderlyingTokenParameters(address)": FunctionFragment;
    "getUnderlyingTokensPerShare(address)": FunctionFragment;
    "getYieldTokenParameters(address)": FunctionFragment;
    "getYieldTokensPerShare(address)": FunctionFragment;
    "isSupportedUnderlyingToken(address)": FunctionFragment;
    "isSupportedYieldToken(address)": FunctionFragment;
    "keepers(address)": FunctionFragment;
    "minimumCollateralization()": FunctionFragment;
    "mintAllowance(address,address)": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "positions(address,address)": FunctionFragment;
    "protocolFee()": FunctionFragment;
    "protocolFeeReceiver()": FunctionFragment;
    "sentinels(address)": FunctionFragment;
    "transmuter()": FunctionFragment;
    "whitelist()": FunctionFragment;
    "withdrawAllowance(address,address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "accounts", values: [string]): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLiquidationLimitInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintLimitInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRepayLimitInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedUnderlyingTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedYieldTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingTokenParameters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingTokensPerShare",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldTokenParameters",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldTokensPerShare",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedUnderlyingToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedYieldToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "keepers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "minimumCollateralization",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sentinels", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transmuter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawAllowance",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationLimitInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMintLimitInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRepayLimitInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedUnderlyingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedYieldTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingTokenParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingTokensPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldTokenParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldTokensPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedUnderlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedYieldToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keepers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumCollateralization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sentinels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transmuter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllowance",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAlchemistV2State extends BaseContract {
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

  interface: IAlchemistV2StateInterface;

  functions: {
    accounts(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string[]] & { debt: BigNumber; depositedTokens: string[] }
    >;

    admin(overrides?: CallOverrides): Promise<[string] & { admin: string }>;

    getLiquidationLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getMintLimitInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getRepayLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getSupportedUnderlyingTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    getSupportedYieldTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    getUnderlyingTokenParameters(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, BigNumber, boolean] & {
          decimals: number;
          conversionFactor: BigNumber;
          enabled: boolean;
        }
      ] & {
        params: [number, BigNumber, boolean] & {
          decimals: number;
          conversionFactor: BigNumber;
          enabled: boolean;
        };
      }
    >;

    getUnderlyingTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    getYieldTokenParameters(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          number,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          decimals: number;
          underlyingToken: string;
          adapter: string;
          maximumLoss: BigNumber;
          maximumExpectedValue: BigNumber;
          creditUnlockRate: BigNumber;
          activeBalance: BigNumber;
          harvestableBalance: BigNumber;
          totalShares: BigNumber;
          expectedValue: BigNumber;
          pendingCredit: BigNumber;
          distributedCredit: BigNumber;
          lastDistributionBlock: BigNumber;
          accruedWeight: BigNumber;
          enabled: boolean;
        }
      ] & {
        params: [
          number,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          decimals: number;
          underlyingToken: string;
          adapter: string;
          maximumLoss: BigNumber;
          maximumExpectedValue: BigNumber;
          creditUnlockRate: BigNumber;
          activeBalance: BigNumber;
          harvestableBalance: BigNumber;
          totalShares: BigNumber;
          expectedValue: BigNumber;
          pendingCredit: BigNumber;
          distributedCredit: BigNumber;
          lastDistributionBlock: BigNumber;
          accruedWeight: BigNumber;
          enabled: boolean;
        };
      }
    >;

    getYieldTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    isSupportedUnderlyingToken(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isSupported: boolean }>;

    isSupportedYieldToken(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isSupported: boolean }>;

    keepers(
      keeper: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isKeeper: boolean }>;

    minimumCollateralization(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { minimumCollateralization: BigNumber }>;

    mintAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { allowance: BigNumber }>;

    pendingAdmin(
      overrides?: CallOverrides
    ): Promise<[string] & { pendingAdmin: string }>;

    positions(
      owner: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shares: BigNumber;
        lastAccruedWeight: BigNumber;
      }
    >;

    protocolFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { protocolFee: BigNumber }>;

    protocolFeeReceiver(
      overrides?: CallOverrides
    ): Promise<[string] & { protocolFeeReceiver: string }>;

    sentinels(
      sentinel: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isSentinel: boolean }>;

    transmuter(
      overrides?: CallOverrides
    ): Promise<[string] & { transmuter: string }>;

    whitelist(
      overrides?: CallOverrides
    ): Promise<[string] & { whitelist: string }>;

    withdrawAllowance(
      owner: string,
      spender: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { allowance: BigNumber }>;
  };

  accounts(
    owner: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string[]] & { debt: BigNumber; depositedTokens: string[] }
  >;

  admin(overrides?: CallOverrides): Promise<string>;

  getLiquidationLimitInfo(
    underlyingToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      currentLimit: BigNumber;
      rate: BigNumber;
      maximum: BigNumber;
    }
  >;

  getMintLimitInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      currentLimit: BigNumber;
      rate: BigNumber;
      maximum: BigNumber;
    }
  >;

  getRepayLimitInfo(
    underlyingToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      currentLimit: BigNumber;
      rate: BigNumber;
      maximum: BigNumber;
    }
  >;

  getSupportedUnderlyingTokens(overrides?: CallOverrides): Promise<string[]>;

  getSupportedYieldTokens(overrides?: CallOverrides): Promise<string[]>;

  getUnderlyingTokenParameters(
    underlyingToken: string,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, boolean] & {
      decimals: number;
      conversionFactor: BigNumber;
      enabled: boolean;
    }
  >;

  getUnderlyingTokensPerShare(
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getYieldTokenParameters(
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      decimals: number;
      underlyingToken: string;
      adapter: string;
      maximumLoss: BigNumber;
      maximumExpectedValue: BigNumber;
      creditUnlockRate: BigNumber;
      activeBalance: BigNumber;
      harvestableBalance: BigNumber;
      totalShares: BigNumber;
      expectedValue: BigNumber;
      pendingCredit: BigNumber;
      distributedCredit: BigNumber;
      lastDistributionBlock: BigNumber;
      accruedWeight: BigNumber;
      enabled: boolean;
    }
  >;

  getYieldTokensPerShare(
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isSupportedUnderlyingToken(
    underlyingToken: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSupportedYieldToken(
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  keepers(keeper: string, overrides?: CallOverrides): Promise<boolean>;

  minimumCollateralization(overrides?: CallOverrides): Promise<BigNumber>;

  mintAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  positions(
    owner: string,
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { shares: BigNumber; lastAccruedWeight: BigNumber }
  >;

  protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  protocolFeeReceiver(overrides?: CallOverrides): Promise<string>;

  sentinels(sentinel: string, overrides?: CallOverrides): Promise<boolean>;

  transmuter(overrides?: CallOverrides): Promise<string>;

  whitelist(overrides?: CallOverrides): Promise<string>;

  withdrawAllowance(
    owner: string,
    spender: string,
    yieldToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    accounts(
      owner: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string[]] & { debt: BigNumber; depositedTokens: string[] }
    >;

    admin(overrides?: CallOverrides): Promise<string>;

    getLiquidationLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getMintLimitInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getRepayLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        currentLimit: BigNumber;
        rate: BigNumber;
        maximum: BigNumber;
      }
    >;

    getSupportedUnderlyingTokens(overrides?: CallOverrides): Promise<string[]>;

    getSupportedYieldTokens(overrides?: CallOverrides): Promise<string[]>;

    getUnderlyingTokenParameters(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, boolean] & {
        decimals: number;
        conversionFactor: BigNumber;
        enabled: boolean;
      }
    >;

    getUnderlyingTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYieldTokenParameters(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        decimals: number;
        underlyingToken: string;
        adapter: string;
        maximumLoss: BigNumber;
        maximumExpectedValue: BigNumber;
        creditUnlockRate: BigNumber;
        activeBalance: BigNumber;
        harvestableBalance: BigNumber;
        totalShares: BigNumber;
        expectedValue: BigNumber;
        pendingCredit: BigNumber;
        distributedCredit: BigNumber;
        lastDistributionBlock: BigNumber;
        accruedWeight: BigNumber;
        enabled: boolean;
      }
    >;

    getYieldTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportedUnderlyingToken(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSupportedYieldToken(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    keepers(keeper: string, overrides?: CallOverrides): Promise<boolean>;

    minimumCollateralization(overrides?: CallOverrides): Promise<BigNumber>;

    mintAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    positions(
      owner: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shares: BigNumber;
        lastAccruedWeight: BigNumber;
      }
    >;

    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeReceiver(overrides?: CallOverrides): Promise<string>;

    sentinels(sentinel: string, overrides?: CallOverrides): Promise<boolean>;

    transmuter(overrides?: CallOverrides): Promise<string>;

    whitelist(overrides?: CallOverrides): Promise<string>;

    withdrawAllowance(
      owner: string,
      spender: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    accounts(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintLimitInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getRepayLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupportedUnderlyingTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedYieldTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyingTokenParameters(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYieldTokenParameters(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYieldTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportedUnderlyingToken(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportedYieldToken(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keepers(keeper: string, overrides?: CallOverrides): Promise<BigNumber>;

    minimumCollateralization(overrides?: CallOverrides): Promise<BigNumber>;

    mintAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      owner: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    sentinels(sentinel: string, overrides?: CallOverrides): Promise<BigNumber>;

    transmuter(overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAllowance(
      owner: string,
      spender: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidationLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintLimitInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRepayLimitInfo(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupportedUnderlyingTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupportedYieldTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingTokenParameters(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYieldTokenParameters(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYieldTokensPerShare(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportedUnderlyingToken(
      underlyingToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportedYieldToken(
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keepers(
      keeper: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumCollateralization(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      owner: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFeeReceiver(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sentinels(
      sentinel: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transmuter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawAllowance(
      owner: string,
      spender: string,
      yieldToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
