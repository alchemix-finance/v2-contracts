pragma solidity ^0.8.11;

import "../interfaces/ITokenAdapter.sol";
import "../interfaces/test/ITestYieldToken.sol";

import "../libraries/TokenUtils.sol";

/// @title  TestYieldTokenAdapter
/// @author Alchemix Finance
contract TestYieldTokenAdapter is ITokenAdapter {
    /// @inheritdoc ITokenAdapter
    address public immutable override token;

    /// @inheritdoc ITokenAdapter
    address public immutable override underlyingToken;

    constructor(address _token) {
        token = _token;
        underlyingToken = ITestYieldToken(_token).underlyingToken();
        IERC20Minimal(ITestYieldToken(_token).underlyingToken()).approve(_token, type(uint256).max);
    }

    /// @inheritdoc ITokenAdapter
    function price() external view override returns (uint256) {
        return ITestYieldToken(token).price();
    }

    /// @inheritdoc ITokenAdapter
    function wrap(uint256 amount, address recipient) external override returns (uint256) {
        TokenUtils.safeTransferFrom(underlyingToken, msg.sender, address(this), amount);
        return ITestYieldToken(token).mint(amount, recipient);
    }

    /// @inheritdoc ITokenAdapter
    function unwrap(uint256 amount, address recipient) external override returns (uint256) {
        TokenUtils.safeTransferFrom(token, msg.sender, address(this), amount);
        return ITestYieldToken(token).redeem(amount, recipient);
    }
}