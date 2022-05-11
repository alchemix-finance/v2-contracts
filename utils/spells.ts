import { legos } from "@studydefi/money-legos";
import { Spell } from "familiar/src/Familiar";
import { Signer, Contract, utils, BigNumber } from "ethers";
import IDssProxyActions from "../artifacts/contracts/interfaces/external/maker/IDssProxyActions.sol/IDssProxyActions.json";
import AlchemistV2 from "../artifacts/contracts/interfaces/IAlchemistV2.sol/IAlchemistV2.json";
import AlchemicTokenV1 from "../artifacts/contracts/AlchemicTokenV1.sol/AlchemicTokenV1.json";
import ITetherToken from "../artifacts/contracts/interfaces/external/tether/ITetherToken.sol/ITetherToken.json";
import ISwapRouter from "../artifacts/contracts/interfaces/external/uniswap/ISwapRouter.sol/ISwapRouter.json";
import ITransmuterV2 from "../artifacts/contracts/interfaces/transmuter/ITransmuterV2.sol/ITransmuterV2.json";
import ITransmuterV1 from "../artifacts/contracts/interfaces/ITransmuterV1.sol/ITransmuterV1.json";

export const mintDaiSpell: Spell = {
  name: "mintDai",
  address: "0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038", // dds proxy actions
  abi: IDssProxyActions.abi,
  func: "openLockETHAndDraw",
  signer: "user",
};

export const mintDaiSpellArgs = (
  daiAmt: BigNumber,
  daiEthRate: Number = 2000
): Array<any> => {
  const manager = "0x5ef30b9986345249bc32d8928B7ee64DE9435E39";
  const jug = "0x19c0976f590D67707E62397C87829d896Dc0f1F1";
  const ethJoin = "0x2f0b23f53734252bda2277357e97e1517d6b042a";
  const daiJoin = "0x9759A6Ac90977b93B58547b4A71c78317f391A28";
  const ilk = utils.formatBytes32String("ETH-A");
  const sendValue = daiAmt.div(BigNumber.from(daiEthRate)).mul(2);

  return [manager, jug, ethJoin, daiJoin, ilk, daiAmt, { value: sendValue }];
};

export const whitelistAlchemistAlUSDSpell = {
  name: "whitelistAlchemistAlUSD",
  address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
  abi: AlchemicTokenV1.abi,
  func: "setWhitelist",
  signer: "user",
};

export const setCeilingAlUSDSpell = {
  name: "setCeilingAlUSD",
  address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
  abi: AlchemicTokenV1.abi,
  func: "setCeiling",
  signer: "user",
};

export const mintUsdcSpell = {
  name: "mintUsdc",
  address: legos.erc20.usdc.address,
  abi: legos.erc20.usdc.abi,
  func: "mint",
  signer: "usdcMinter",
};

export const issueUsdtSpell = {
  name: "issueUsdt",
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  abi: ITetherToken.abi,
  func: "issue",
  signer: "usdtMinter",
};

export const mintUsdtSpell = {
  name: "mintUsdt",
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  abi: ITetherToken.abi,
  func: "transfer",
  signer: "usdtMinter",
};

export const buyTokenSpell = {
  name: "buyToken",
  address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  abi: ISwapRouter.abi,
  func: "exactOutputSingle",
  signer: "user",
};

export const getBuyUsdcSpellParams = (
  recipient: string,
  deadline: string,
  amountOut: BigNumber
) => {
  return [
    {
      tokenIn: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOut: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      fee: "3000",
      recipient: recipient,
      deadline: deadline,
      amountOut: amountOut,
      amountInMaximum: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      sqrtPriceLimitX96: "0",
    },
  ];
};

export const getBuyUsdtSpellParams = (
  recipient: string,
  deadline: string,
  amountOut: BigNumber
) => {
  return [
    {
      tokenIn: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOut: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      fee: "3000",
      recipient: recipient,
      deadline: deadline,
      amountOut: amountOut,
      amountInMaximum: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      sqrtPriceLimitX96: "0",
    },
  ];
};

export const whitelistAlchemistAlETHSpell = {
  name: "whitelistAlchemistAlETH",
  address: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  abi: AlchemicTokenV1.abi,
  func: "setWhitelist",
  signer: "user",
};

export const setCeilingAlETHSpell = {
  name: "setCeilingAlETH",
  address: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  abi: AlchemicTokenV1.abi,
  func: "setCeiling",
  signer: "user",
};

export const rektYDaiVaultSpell = {
  name: "rektYearnVault",
  address: legos.erc20.dai.address,
  abi: legos.erc20.dai.abi,
  func: "transfer",
  signer: "ydai",
};

export const pauseTransmuterSpell = {
  name: "setPause",
  address: "0xeE69BD81Bd056339368c97c4B2837B4Dc4b796E7",
  abi: ITransmuterV1.abi,
  func: "setPause",
  signer: "treasuryMultisig",
};

export const migrateFundsSpell = {
  name: "migrateFunds",
  address: "0xeE69BD81Bd056339368c97c4B2837B4Dc4b796E7",
  abi: ITransmuterV1.abi,
  func: "migrateFunds",
  signer: "treasuryMultisig",
};