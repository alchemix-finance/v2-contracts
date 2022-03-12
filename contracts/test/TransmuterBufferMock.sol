// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.11;
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import { ITransmuterV2 } from "../interfaces/transmuter/ITransmuterV2.sol";

contract TransmuterBufferMock {
  using SafeERC20 for IERC20;

  mapping(address => address) public transmuters;

  constructor() {}

  function initialize(address[] calldata _underlyingTokens, address[] calldata _transmuters) external {
    for (uint256 i = 0; i < _underlyingTokens.length; i++) {
      transmuters[_underlyingTokens[i]] = _transmuters[i];
    }
  }

  function exchange(address underlyingToken, uint256 amount) external {
    IERC20(underlyingToken).safeTransferFrom(msg.sender, address(this), amount);
    ITransmuterV2(transmuters[underlyingToken]).exchange(amount);
  }

  function withdraw(
    address underlyingToken,
    uint256 amount,
    address recipient
  ) external {
    IERC20(underlyingToken).safeTransfer(recipient, amount);
  }
}
