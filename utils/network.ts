import { generateRandomHex } from "./helpers";

export const getSigner = (hre) => {
    if (hre.hardhatArguments.network == 'localhost') {
        hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/", {name: 'hardhat', chainId: 1337});
    } else if (hre.hardhatArguments.network == 'mainnet') {
        hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider(`https://eth-mainnet.alchemyapi.io/v2/${process.env["ALCHEMY_API_KEY"]}`, {name: "mainnet", chainId: 1});
    } else if (hre.hardhatArguments.network == 'fantomtestnet') {
        hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider("http://40.112.61.110:10545", {name: "fantomtestnet", chainId: 1337});
    } else if (hre.hardhatArguments.network == 'fantom') {
        hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider("https://rpc.ankr.com/fantom", {name: "fantom", chainId: 250});
    } else if (hre.hardhatArguments.network == 'arbitrum') {
        hre.ethers.provider = new hre.ethers.providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc", {name: "arbitrum", chainId: 42161});
    }
    return new hre.ethers.Wallet(process.env.MAINNET_DEPLOYER_PK || process.env.FANTOMTESTNET_DEPLOYER_PK || process.env.FANTOM_DEPLOYER_PK || process.env.ARBITRUM_DEPLOYER_PK || generateRandomHex(64), hre.ethers.provider)
}