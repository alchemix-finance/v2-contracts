import chai from "chai";

import { solidity } from "ethereum-waffle";
import { ethers, upgrades } from "hardhat";
import {
  BigNumber,
  BigNumberish,
  ContractFactory,
  Signer,
  Wallet,
} from "ethers";
import {
  ERC20Mock,
  TransmuterV2,
  TransmuterBufferMock,
  TestYieldToken,
  Whitelist,
} from "../typechain";
import { parseEther, parseUnits } from "ethers/lib/utils";

chai.use(solidity);

const { expect } = chai;

let signers: Signer[];

let deployer: Signer;
let caller: Signer;
let firstDepositor: Signer;
let secondDepositor: Signer;

let TransmuterV2Factory: ContractFactory;
let TransmuterBufferMockFactory: ContractFactory;
let ERC20MockFactory: ContractFactory;

let syntheticToken: ERC20Mock;
let underlyingToken: ERC20Mock;
let transmuterBufferMock: TransmuterBufferMock;
let whitelist: Whitelist;

let transmuter: TransmuterV2;

let wallet: Wallet;

let yieldToken: TestYieldToken;

describe("TransmuterV2", () => {
  let callerAddress: string;
  let deployerAddress: string;
  const initAmt = parseEther("100000");

  before(async () => {
    TransmuterV2Factory = await ethers.getContractFactory("TransmuterV2");
    TransmuterBufferMockFactory = await ethers.getContractFactory(
      "TransmuterBufferMock"
    );
    ERC20MockFactory = await ethers.getContractFactory("ERC20Mock");
  });

  beforeEach(async () => {
    [deployer, caller, firstDepositor, secondDepositor, ...signers] =
      await ethers.getSigners();
    callerAddress = await caller.getAddress();
    deployerAddress = await deployer.getAddress();
  });

  beforeEach(async () => {
    syntheticToken = (await ERC20MockFactory.connect(deployer).deploy(
      "Synthetic",
      "SYN",
      18
    )) as ERC20Mock;
    await syntheticToken.mint(callerAddress, initAmt);
    underlyingToken = (await ERC20MockFactory.connect(deployer).deploy(
      "Underlying",
      "UND",
      18
    )) as ERC20Mock;
    await underlyingToken.mint(deployerAddress, initAmt);
    transmuterBufferMock = (await TransmuterBufferMockFactory.connect(
      deployer
    ).deploy()) as TransmuterBufferMock;
    await underlyingToken.mint(
      transmuterBufferMock.address,
      parseEther("1000000")
    );
  });

  const setup = async () => {
    const whitelistFactory = await ethers.getContractFactory("Whitelist");
    whitelist = (await whitelistFactory
      .connect(deployer)
      .deploy()) as Whitelist;

    transmuter = (await upgrades.deployProxy(TransmuterV2Factory, [
      syntheticToken.address,
      underlyingToken.address,
      transmuterBufferMock.address,
      whitelist.address,
    ], { unsafeAllow: ["delegatecall", "constructor"] })) as TransmuterV2;
    await transmuter.deployed();

    await transmuterBufferMock.initialize(transmuter.address);
    await transmuter.grantRole(await transmuter.SENTINEL(), deployerAddress);
    await transmuter.setPause(false);
    await syntheticToken.connect(caller).approve(transmuter.address, initAmt);
    await underlyingToken
      .connect(deployer)
      .approve(transmuter.address, initAmt);
    await syntheticToken
      .connect(firstDepositor)
      .approve(transmuter.address, initAmt);
    await syntheticToken
      .connect(secondDepositor)
      .approve(transmuter.address, initAmt);
  };

  describe("deposit", () => {
    beforeEach(async () => {
      await setup();
    });

    context("once", async () => {
      const depositAmount = parseEther("500");

      beforeEach(async () => {
        await syntheticToken.connect(caller).mint(callerAddress, depositAmount);
        await syntheticToken
          .connect(caller)
          .approve(transmuter.address, depositAmount);
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          depositAmount
        );
      });
    });

    context("twice", () => {
      const firstDepositAmount = parseEther("500");
      const secondDepositAmount = parseEther("250");
      const totalAmount = firstDepositAmount.add(secondDepositAmount);

      beforeEach(async () => {
        await syntheticToken.connect(caller).mint(callerAddress, totalAmount);

        await syntheticToken
          .connect(caller)
          .approve(transmuter.address, totalAmount);

        await transmuter
          .connect(caller)
          .deposit(firstDepositAmount, callerAddress);
        await transmuter
          .connect(caller)
          .deposit(secondDepositAmount, callerAddress);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          totalAmount
        );
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(totalAmount);
      });
    });

    context("deposit 500, exchange 300, deposit 100, exchange 300", () => {
      beforeEach(async () => {
        await transmuter
          .connect(caller)
          .deposit(parseEther("500"), callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, parseEther("300"));
        await transmuter
          .connect(caller)
          .deposit(parseEther("100"), callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, parseEther("300"));
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(parseEther("0")); // 600
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          parseEther("0")
        ); // 150
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(
          parseEther("600")
        ); // 450
      });
    });

    context("once before exchange and once after", () => {
      const firstDepositAmount = parseEther("500");
      const secondDepositAmount = parseEther("250");
      const exchangeAmount = parseEther("250");
      const totalDeposited = firstDepositAmount.add(secondDepositAmount);
      const expectedUnexchangedAmount = totalDeposited.sub(exchangeAmount);

      beforeEach(async () => {
        await transmuter
          .connect(caller)
          .deposit(firstDepositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
        await transmuter
          .connect(caller)
          .deposit(secondDepositAmount, callerAddress);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(
          totalDeposited.sub(exchangeAmount)
        );
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          expectedUnexchangedAmount
        );
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(
          exchangeAmount
        );
      });
    });

    context("from multiple callers", () => {
      const firstDepositAmount = parseEther("500");
      const secondDepositAmount = parseEther("250");
      const totalDeposited = firstDepositAmount.add(secondDepositAmount);

      beforeEach(async () => {
        await syntheticToken
          .connect(deployer)
          .mint(await firstDepositor.getAddress(), firstDepositAmount);
        await syntheticToken
          .connect(deployer)
          .mint(await secondDepositor.getAddress(), secondDepositAmount);
        await transmuter
          .connect(firstDepositor)
          .deposit(firstDepositAmount, await firstDepositor.getAddress());
        await transmuter
          .connect(secondDepositor)
          .deposit(secondDepositAmount, await secondDepositor.getAddress());
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(totalDeposited);
      });

      it("updates unexchanged balance of first depositor", async () => {
        expect(
          await transmuter.getUnexchangedBalance(
            await firstDepositor.getAddress()
          )
        ).equal(firstDepositAmount);
      });

      it("updates unexchanged balance of second depositor", async () => {
        expect(
          await transmuter.getUnexchangedBalance(
            await secondDepositor.getAddress()
          )
        ).equal(secondDepositAmount);
      });
    });

    it("emits a Deposit event", async () => {
      const depositAmount = parseEther("500");

      await expect(
        await transmuter.connect(caller).deposit(depositAmount, callerAddress)
      ).to.emit(transmuter, "Deposit");
    });
  });

  describe("withdraw", () => {
    beforeEach(async () => {
      await setup();
    });

    context("all", () => {
      const depositAmount = parseEther("500");
      const withdrawAmount = parseEther("500");

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuter
          .connect(caller)
          .withdraw(withdrawAmount, callerAddress);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(0);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(0);
      });
    });

    context("partial", () => {
      const depositAmount = parseEther("500");
      const withdrawAmount = parseEther("250");
      const expectedTotalUnexchanged = depositAmount.sub(withdrawAmount);
      const expectedUnexchangedBalance = depositAmount.sub(withdrawAmount);

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuter
          .connect(caller)
          .withdraw(withdrawAmount, callerAddress);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(
          expectedTotalUnexchanged
        );
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          expectedUnexchangedBalance
        );
      });
    });

    it("emits a Withdraw event", async () => {
      const depositAmount = parseEther("500");
      const withdrawAmount = parseEther("500");

      await transmuter.connect(caller).deposit(depositAmount, callerAddress);

      await expect(
        await transmuter.connect(caller).withdraw(withdrawAmount, callerAddress)
      ).emit(transmuter, "Withdraw");
    });
  });

  describe("claim", () => {
    beforeEach(async () => {
      await setup();
    });

    context("after under fulfilling a deposit", () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("250");

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
        // claim can be called w/ dummy arguments 3 and 4 b/c they are not used in the TransmuterMock
        await transmuter.connect(caller).claim(exchangeAmount, callerAddress);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(
          depositAmount.sub(exchangeAmount)
        );
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(0);
      });
    });

    context("after exactly fulfilling a deposit", () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("500");

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
        // claim can be called w/ dummy arguments 3 and 4 b/c they are not used in the TransmuterMock
        await transmuter.connect(caller).claim(depositAmount, callerAddress);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(0);
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(0);
      });
    });

    context("after over fulfilling a deposit", () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("1000");

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
        // claim can be called w/ dummy arguments 3 and 4 b/c they are not used in the TransmuterMock
        await transmuter.connect(caller).claim(depositAmount, callerAddress);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(0);
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(0);
      });
    });

    it("emits a Claim event", async () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("1000");

      await transmuter.connect(caller).deposit(depositAmount, callerAddress);
      await transmuterBufferMock
        .connect(deployer)
        .exchange(underlyingToken.address, exchangeAmount);

      await expect(
        transmuter.connect(caller).claim(depositAmount, callerAddress)
      ).emit(transmuter, "Claim");
    });
  });

  describe("exchange", () => {
    beforeEach(async () => {
      await setup();
    });

    context("when no deposits have been made", () => {
      const exchangeAmount = parseEther("500");

      beforeEach(async () => {
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
      });

      it("updates total buffered", async () => {
        expect(await transmuter.totalBuffered()).equal(exchangeAmount);
      });
    });

    context("exactly fulfilling a deposit", () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("500");

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(0);
      });

      it("does not update total buffered", async () => {
        expect(await transmuter.totalBuffered()).equal(0);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(0);
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(
          depositAmount
        );
      });
    });

    context("over fulfilling a deposit", () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("1000");
      const expectedTotalBuffered = exchangeAmount.sub(depositAmount);

      beforeEach(async () => {
        await transmuter.connect(caller).deposit(depositAmount, callerAddress);
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(0);
      });

      it("updates total buffered", async () => {
        expect(await transmuter.totalBuffered()).equal(expectedTotalBuffered);
      });

      it("updates unexchanged balance", async () => {
        expect(await transmuter.getUnexchangedBalance(callerAddress)).equal(0);
      });

      it("updates exchanged balance", async () => {
        expect(await transmuter.getExchangedBalance(callerAddress)).equal(
          depositAmount
        );
      });
    });

    context("partially fulfilling multiple deposits", () => {
      const firstDepositAmount = parseEther("500");
      const secondDepositAmount = parseEther("500");
      const firstExchangeAmount = parseEther("250");
      const secondExchangeAmount = parseEther("500");

      beforeEach(async () => {
        await syntheticToken
          .connect(deployer)
          .mint(await firstDepositor.getAddress(), firstDepositAmount);
        await syntheticToken
          .connect(deployer)
          .mint(await secondDepositor.getAddress(), secondDepositAmount);
        await transmuter
          .connect(firstDepositor)
          .deposit(firstDepositAmount, await firstDepositor.getAddress());
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, firstExchangeAmount);
        await transmuter
          .connect(secondDepositor)
          .deposit(secondDepositAmount, await secondDepositor.getAddress());
        await transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, secondExchangeAmount);
      });

      it("updates total unexchanged", async () => {
        expect(await transmuter.totalUnexchanged()).equal(secondDepositAmount);
      });

      it("updates unexchanged balance of first depositor", async () => {
        expect(
          await transmuter.getUnexchangedBalance(
            await firstDepositor.getAddress()
          )
        ).equal(0);
      });

      it("updates exchanged balance of first depositor", async () => {
        expect(
          await transmuter.getExchangedBalance(
            await firstDepositor.getAddress()
          )
        ).equal(firstDepositAmount);
      });

      it("updates unexchanged balance of second depositor", async () => {
        expect(
          await transmuter.getUnexchangedBalance(
            await secondDepositor.getAddress()
          )
        ).equal(parseEther("250"));
      });

      it("updates exchanged balance of second depositor", async () => {
        expect(
          await transmuter.getExchangedBalance(
            await secondDepositor.getAddress()
          )
        ).equal(parseEther("250"));
      });
    });

    context(
      "partially fulfilling multiple deposits with an unused tick in between",
      () => {
        const firstDepositAmount = parseEther("500");
        const secondDepositAmount = parseEther("500");

        const firstExchangeAmount = parseEther("200");
        const secondExchangeAmount = parseEther("50");
        const thirdExchangeAmount = parseEther("500");

        beforeEach(async () => {
          await syntheticToken
            .connect(deployer)
            .mint(await firstDepositor.getAddress(), firstDepositAmount);
          await syntheticToken
            .connect(deployer)
            .mint(await secondDepositor.getAddress(), secondDepositAmount);
          await transmuter
            .connect(firstDepositor)
            .deposit(firstDepositAmount, await firstDepositor.getAddress());
          await transmuterBufferMock
            .connect(deployer)
            .exchange(underlyingToken.address, firstExchangeAmount);
          await transmuterBufferMock
            .connect(deployer)
            .exchange(underlyingToken.address, secondExchangeAmount);
          await transmuter
            .connect(secondDepositor)
            .deposit(secondDepositAmount, await secondDepositor.getAddress());
          await transmuterBufferMock
            .connect(deployer)
            .exchange(underlyingToken.address, thirdExchangeAmount);
        });

        it("updates total unexchanged", async () => {
          expect(await transmuter.totalUnexchanged()).equal(
            secondDepositAmount
          );
        });

        it("updates unexchanged balance of first depositor", async () => {
          expect(
            await transmuter.getUnexchangedBalance(
              await firstDepositor.getAddress()
            )
          ).equal(0);
        });

        it("updates exchanged balance of first depositor", async () => {
          expect(
            await transmuter.getExchangedBalance(
              await firstDepositor.getAddress()
            )
          ).equal(firstDepositAmount);
        });

        it("updates unexchanged balance of second depositor", async () => {
          expect(
            await transmuter.getUnexchangedBalance(
              await secondDepositor.getAddress()
            )
          ).equal(parseEther("250"));
        });

        it("updates exchanged balance of second depositor", async () => {
          expect(
            await transmuter.getExchangedBalance(
              await secondDepositor.getAddress()
            )
          ).equal(parseEther("250"));
        });
      }
    );

    it("emits a Exchange event", async () => {
      const depositAmount = parseEther("500");
      const exchangeAmount = parseEther("500");

      await transmuter.connect(caller).deposit(depositAmount, callerAddress);

      await expect(
        transmuterBufferMock
          .connect(deployer)
          .exchange(underlyingToken.address, exchangeAmount)
      ).emit(transmuter, "Exchange");
    });
  });
});
