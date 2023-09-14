/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";

export interface ITokenRegistryInterface extends utils.Interface {
  functions: {
    "allTokens(uint256)": FunctionFragment;
    "dexRouter()": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "getDeployerTokenType(address)": FunctionFragment;
    "getTokenCreator(address)": FunctionFragment;
    "getTokenType(address)": FunctionFragment;
    "getTokensByCreator(address,uint256)": FunctionFragment;
    "ice()": FunctionFragment;
    "isDeployerRegistered(address)": FunctionFragment;
    "isTokenRegistered(address)": FunctionFragment;
    "numTokensByCreator(address)": FunctionFragment;
    "numTokensCreated()": FunctionFragment;
    "registerToken(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allTokens"
      | "dexRouter"
      | "feeReceiver"
      | "getDeployerTokenType"
      | "getTokenCreator"
      | "getTokenType"
      | "getTokensByCreator"
      | "ice"
      | "isDeployerRegistered"
      | "isTokenRegistered"
      | "numTokensByCreator"
      | "numTokensCreated"
      | "registerToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "allTokens", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "dexRouter", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeReceiver", values?: undefined): string;
  encodeFunctionData(functionFragment: "getDeployerTokenType", values: [string]): string;
  encodeFunctionData(functionFragment: "getTokenCreator", values: [string]): string;
  encodeFunctionData(functionFragment: "getTokenType", values: [string]): string;
  encodeFunctionData(functionFragment: "getTokensByCreator", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "ice", values?: undefined): string;
  encodeFunctionData(functionFragment: "isDeployerRegistered", values: [string]): string;
  encodeFunctionData(functionFragment: "isTokenRegistered", values: [string]): string;
  encodeFunctionData(functionFragment: "numTokensByCreator", values: [string]): string;
  encodeFunctionData(functionFragment: "numTokensCreated", values?: undefined): string;
  encodeFunctionData(functionFragment: "registerToken", values: [string, string]): string;

  decodeFunctionResult(functionFragment: "allTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeReceiver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDeployerTokenType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenCreator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokensByCreator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDeployerRegistered", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTokenRegistered", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numTokensByCreator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numTokensCreated", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registerToken", data: BytesLike): Result;

  events: {
    "DeployerRegistered(uint256,address)": EventFragment;
    "TokenRegistered(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRegistered"): EventFragment;
}

export interface DeployerRegisteredEventObject {
  tokenType: BigNumber;
  deployer: string;
}
export type DeployerRegisteredEvent = TypedEvent<[BigNumber, string], DeployerRegisteredEventObject>;

export type DeployerRegisteredEventFilter = TypedEventFilter<DeployerRegisteredEvent>;

export interface TokenRegisteredEventObject {
  token: string;
  creator: string;
  tokenType: BigNumber;
}
export type TokenRegisteredEvent = TypedEvent<[string, string, BigNumber], TokenRegisteredEventObject>;

export type TokenRegisteredEventFilter = TypedEventFilter<TokenRegisteredEvent>;

export interface ITokenRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allTokens(arg0: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    dexRouter(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    feeReceiver(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getDeployerTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getTokenCreator(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getTokensByCreator(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ice(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    isDeployerRegistered(deployer: string, overrides?: CallOverrides): Promise<[boolean] & { isRegistered: boolean }>;

    isTokenRegistered(token: string, overrides?: CallOverrides): Promise<[boolean] & { isRegistered: boolean }>;

    numTokensByCreator(creator: string, overrides?: CallOverrides): Promise<[BigNumber] & { numTokens: BigNumber }>;

    numTokensCreated(overrides?: CallOverrides): Promise<[BigNumber] & { numTokens: BigNumber }>;

    registerToken(
      token: string,
      creator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  allTokens(arg0: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  dexRouter(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  feeReceiver(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getDeployerTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getTokenCreator(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getTokensByCreator(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ice(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  isDeployerRegistered(deployer: string, overrides?: CallOverrides): Promise<boolean>;

  isTokenRegistered(token: string, overrides?: CallOverrides): Promise<boolean>;

  numTokensByCreator(creator: string, overrides?: CallOverrides): Promise<BigNumber>;

  numTokensCreated(overrides?: CallOverrides): Promise<BigNumber>;

  registerToken(
    token: string,
    creator: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    dexRouter(overrides?: CallOverrides): Promise<string>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    getDeployerTokenType(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTokenCreator(arg0: string, overrides?: CallOverrides): Promise<string>;

    getTokenType(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTokensByCreator(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;

    ice(overrides?: CallOverrides): Promise<string>;

    isDeployerRegistered(deployer: string, overrides?: CallOverrides): Promise<boolean>;

    isTokenRegistered(token: string, overrides?: CallOverrides): Promise<boolean>;

    numTokensByCreator(creator: string, overrides?: CallOverrides): Promise<BigNumber>;

    numTokensCreated(overrides?: CallOverrides): Promise<BigNumber>;

    registerToken(token: string, creator: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "DeployerRegistered(uint256,address)"(
      tokenType?: BigNumberish | null,
      deployer?: string | null
    ): DeployerRegisteredEventFilter;
    DeployerRegistered(tokenType?: BigNumberish | null, deployer?: string | null): DeployerRegisteredEventFilter;

    "TokenRegistered(address,address,uint256)"(
      token?: string | null,
      creator?: string | null,
      tokenType?: null
    ): TokenRegisteredEventFilter;
    TokenRegistered(token?: string | null, creator?: string | null, tokenType?: null): TokenRegisteredEventFilter;
  };

  estimateGas: {
    allTokens(arg0: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    dexRouter(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    feeReceiver(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getDeployerTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getTokenCreator(arg0: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getTokensByCreator(arg0: string, arg1: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    ice(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    isDeployerRegistered(deployer: string, overrides?: CallOverrides): Promise<BigNumber>;

    isTokenRegistered(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    numTokensByCreator(creator: string, overrides?: CallOverrides): Promise<BigNumber>;

    numTokensCreated(overrides?: CallOverrides): Promise<BigNumber>;

    registerToken(token: string, creator: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    allTokens(arg0: BigNumberish, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    dexRouter(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getDeployerTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getTokenCreator(arg0: string, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getTokenType(arg0: string, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getTokensByCreator(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ice(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    isDeployerRegistered(deployer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTokenRegistered(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numTokensByCreator(creator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numTokensCreated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerToken(
      token: string,
      creator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
