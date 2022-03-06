pragma solidity >=0.5.0;

import "../../IERC20Minimal.sol";
import "../../IERC20Metadata.sol";

/// @title ITetherToken
interface ITetherToken is IERC20Minimal, IERC20Metadata {
  // @notice Deprecate current contract in favour of a new one.
  function deprecate(address _upgradedAddress) external;

  /// @notice Issue a new amount of tokens.
  ///
  /// These tokens are deposited into the owner address.
  ///
  /// @param amount Number of tokens to be issued.
  function issue(uint256 amount) external;

  /// @notice Redeem tokens.
  ///
  /// These tokens are withdrawn from the owner address if the balance must be enough to cover the redeem or the call
  /// will fail.
  ///
  /// @param amount Number of tokens to be issued.
  function redeem(uint256 amount) external;

  function setParams(uint256 newBasisPoints, uint256 newMaxFee) external;

  // @notice Emitted when new token are issued.
  event Issue(uint256 amount);

  // @notice Emitted when tokens are redeemed.
  event Redeem(uint256 amount);

  // @notice Emitted when contract is deprecated.
  event Deprecate(address newAddress);

  // @notice Emitted if contract ever adds fees.
  event Params(uint256 feeBasisPoints, uint256 maxFee);
}
