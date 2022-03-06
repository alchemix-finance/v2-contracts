// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.11;
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ITransmuterV2} from "../interfaces/transmuter/ITransmuterV2.sol";

contract TransmuterBufferMock {
  using SafeERC20 for IERC20;

  address public transmuter;

  constructor() {}

  function initialize(address _transmuter) external {
    transmuter = _transmuter;
  }

  function exchange(IERC20 underlyingToken, uint256 amount) external {
    ITransmuterV2(transmuter).exchange(amount);
  }

  function withdraw(
    IERC20 underlyingToken,
    uint256 amount,
    address recipient
  ) external {
    underlyingToken.safeTransfer(recipient, amount);
  }
}
