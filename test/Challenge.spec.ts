import { expect } from "chai";
import { network, ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  IERC721Metadata__factory,
  CErc721Interface__factory,
  ComptrollerInterface__factory,
  CErc20Interface__factory,
  IERC20Minimal__factory,
  IAlchemistV2__factory,
  IERC721Metadata,
  IERC20Minimal,
  IAlchemistV2,
} from "../typechain";

describe.only("Challenge to run as mainnet fork", () => {
  let impersonatedSigner: SignerWithAddress;
  let nftContract: IERC721Metadata;
  let usdcContract: IERC20Minimal;
  let alchemistContract: IAlchemistV2;

  // https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
  const baycAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  // https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3105
  const nftId = "3105";

  // https://github.com/Dropsorg/drops-nft-contracts
  const dropsComptroller = "0xB70FB69a522ed8D4613C4C720F91F93a836EE2f5";
  const dropsCErc721 = "0xC3D8e1fD31e55EDe71aE1453dDf858461E23B59a";
  const usdcCErc20 = "0x7489c6BaAba57d9a431642b26E034aCD191039f7";
  const usdcAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

  // https://alchemix-finance.gitbook.io/user-docs/contracts
  const alchemistAddress = "0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd";

  // Obtained from https://etherscan.io/address/0x5C6374a2ac4EBC38DeA0Fc1F8716e5Ea1AdD94dd#readProxyContract
  // https://etherscan.io/address/0xa354f35829ae975e850e23e9615b11da1b3dc4de
  const yieldTokenAddress = "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE";

  before(async () => {
    // owner of https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3105
    const address = "0xe89552758DEcfa70f60611413a848055842289fD";
    // https://hardhat.org/hardhat-network/docs/guides/forking-other-networks#impersonating-accounts
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [address],
    });
    impersonatedSigner = await ethers.getSigner(address);

    nftContract = IERC721Metadata__factory.connect(
      baycAddress,
      impersonatedSigner
    );

    usdcContract = IERC20Minimal__factory.connect(
      usdcAddress,
      impersonatedSigner
    );

    alchemistContract = IAlchemistV2__factory.connect(
      alchemistAddress,
      impersonatedSigner
    );
  });

  describe("Do steps off chain", () => {
    it("check the Bored Ape", async () => {
      const owner = await nftContract.ownerOf(nftId);
      const address = await impersonatedSigner.getAddress();
      console.log("owner", owner);
      expect(address).eql(owner);
    });
    it("use it in Drops and obtain USDC", async () => {
      const initialBalance = await usdcContract.balanceOf(
        impersonatedSigner.address
      );
      console.log("initial USDC balance", initialBalance.toString());
      // See how to borrow assets https://medium.com/compound-finance/borrowing-assets-from-compound-quick-start-guide-f5e69af4b8f4
      // drops is a fork from compound
      const comptroller = ComptrollerInterface__factory.connect(
        dropsComptroller,
        impersonatedSigner
      );
      // Enter the market with the cToken for the NFT we want
      // https://compound.finance/docs/comptroller#enter-markets
      const enterError = await comptroller.callStatic.enterMarkets([
        dropsCErc721,
      ]);
      expect(enterError[0].toString()).eql("0");
      await comptroller.enterMarkets([dropsCErc721]);

      const cErc721 = CErc721Interface__factory.connect(
        dropsCErc721,
        impersonatedSigner
      );

      // Approve the token before minting
      await nftContract.approve(cErc721.address, nftId);

      // Add it as collateral
      // https://compound.finance/docs/ctokens#mint
      const mintError = await cErc721.callStatic.mint(nftId);
      expect(mintError.toString()).eql("0");
      await cErc721.mint(nftId);

      const cErc20 = CErc20Interface__factory.connect(
        usdcCErc20,
        impersonatedSigner
      );

      const cash = await cErc20.getCash();
      console.log("Current cash", cash.toString());

      // https://compound.finance/docs/ctokens#borrow
      const amountToBorrow = cash;
      const borrowError = await cErc20.callStatic.borrow(amountToBorrow);
      expect(borrowError.toString()).eql("0");
      await cErc20.borrow(amountToBorrow);

      const afterBorrowBalance = await usdcContract.balanceOf(
        impersonatedSigner.address
      );
      console.log("after borrow USDC balance", afterBorrowBalance.toString());
    });
    it("put it in Alchemix and get alUSD", async () => {
      const depositAmount = await usdcContract.balanceOf(
        impersonatedSigner.address
      );
      console.log("USDC to deposit", depositAmount.toString());
      await usdcContract.approve(alchemistContract.address, depositAmount);

      // https://alchemix-finance.gitbook.io/v2/docs/alchemistv2#depositunderlying
      await alchemistContract.depositUnderlying(
        yieldTokenAddress,
        depositAmount,
        impersonatedSigner.address,
        1
      );

      const shares = await alchemistContract.positions(
        impersonatedSigner.address,
        yieldTokenAddress
      );
      console.log("shares", shares.toString());

      // TODO mint debt and move this to solidity
    });
  });
});
