pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./base/Errors.sol";
import "./interfaces/IAlchemistV2.sol";
import "./interfaces/external/IWETH9.sol";
import "./interfaces/IWETHGateway.sol";

/// @title  WETHGateway
/// @author Alchemix Finance
contract WETHGateway is IWETHGateway, Ownable {
    /// @notice The wrapped ethereum contract.
    IWETH9 public immutable WETH;

    constructor(address weth) {
        WETH = IWETH9(weth);
    }

    /// @dev Allows for payments from the WETH contract.
    receive() external payable {
        if (IWETH9(msg.sender) != WETH) {
            revert Unauthorized();
        }
    }

    /// @inheritdoc IWETHGateway
    function refreshAllowance(address alchemist) external onlyOwner {
        WETH.approve(alchemist, type(uint256).max);
    }

    /// @inheritdoc IWETHGateway
    function depositUnderlying(
        address alchemist,
        address yieldToken,
        uint256 amount,
        address recipient,
        uint256 minimumAmountOut
    ) external payable {
        if (amount != msg.value) {
            revert IllegalArgument();
        }
        WETH.deposit{value: msg.value}();
        IAlchemistV2(alchemist).depositUnderlying(yieldToken, amount, recipient, minimumAmountOut);
    }

    /// @inheritdoc IWETHGateway
    function withdrawUnderlying(
        address alchemist,
        address yieldToken,
        uint256 shares,
        address recipient,
        uint256 minimumAmountOut
    ) external {
        // Ensure that the underlying of the target yield token is in fact WETH
        IAlchemistV2.YieldTokenParams memory params = IAlchemistV2(alchemist).getYieldTokenParameters(yieldToken);
        if (params.underlyingToken != address(WETH)) {
            revert IllegalArgument();
        }

        IAlchemistV2(alchemist).withdrawUnderlyingFrom(msg.sender, yieldToken, shares, address(this), minimumAmountOut);

        uint256 amount = WETH.balanceOf(address(this));
        WETH.withdraw(amount);

        (bool success, ) = recipient.call{value: amount}(new bytes(0));
        if (!success) {
            revert IllegalState();
        }
    }
}