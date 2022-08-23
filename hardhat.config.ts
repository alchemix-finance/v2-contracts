import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";
import "hardhat-contract-sizer";

// import "./tasks/testnet";

dotenv.config();

const generateRandomHex = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 0,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
  },
  paths: {},
  namedAccounts: {
    usdt: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    ydai: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
    yusdc: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9",
    yusdt: "0x7Da96a3891Add058AdA2E826306D812C638D87a7",
    yweth: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
    aleth: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
    alusd: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
    treasuryMultisig: "0x8392F6669292fA56123F71949B52d883aE57e225",
    devMultisig: "0x9e2b6378ee8ad2A4A95Fe481d63CAba8FB0EBBF9",
    usdcMinter: "0x5b6122c109b78c6755486966148c1d70a50a47d7",
    usdtMinter: "0xC6CDE7C39eB2f0F0095F41570af89eFC2C1Ea828",
    vb: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    deployer: 0,
    governance: 1,
  },
  networks: {
    coverage: {
      url: "http://localhost:8555",
      gas: 15000000000,
      gasPrice: 80000000000,
      baseFee: 1,
    },
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: false,
      hardfork: "london",
      // forking: {
      //  url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      //  blockNumber: 13263419,
      // },
      accounts: [
        {
          privateKey: process.env.MAINNET_DEPLOYER_PK || generateRandomHex(64),
          balance: "1000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "2000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "3000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "3000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "3000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "3000000000000000000000000",
        },
        {
          privateKey: generateRandomHex(64),
          balance: "3000000000000000000000000",
        }
      ],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || "",
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

if (process.env.FORK) {
  let forking = {
    url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
  };
  if (process.env.FORK_BLOCK) {
    Object.assign(forking, { blockNumber: Number(process.env.FORK_BLOCK) });
  }
  config.networks.hardhat = Object.assign({}, config.networks.hardhat, {
    forking: forking,
  });
}

export default config;
