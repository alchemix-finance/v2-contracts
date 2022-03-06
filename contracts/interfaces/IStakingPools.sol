// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

interface IStakingPools {
    function acceptGovernance() external;
    function claim(uint256 _poolId) external;
    function createPool(address _token) external returns (uint256);
    function deposit(uint256 _poolId, uint256 _depositAmount) external;
    function exit(uint256 _poolId) external;
    function getPoolRewardRate(uint256 _poolId) view external returns (uint256);
    function getPoolRewardWeight(uint256 _poolId) view external returns (uint256);
    function getPoolToken(uint256 _poolId) view external returns (address);
    function getPoolTotalDeposited(uint256 _poolId) view external returns (uint256);
    function getStakeTotalDeposited(address _account, uint256 _poolId) view external returns (uint256);
    function getStakeTotalUnclaimed(address _account, uint256 _poolId) view external returns (uint256);
    function governance() view external returns (address);
    function pendingGovernance() view external returns (address);
    function poolCount() view external returns (uint256);
    function reward() view external returns (address);
    function rewardRate() view external returns (uint256);
    function setPendingGovernance(address _pendingGovernance) external;
    function setRewardRate(uint256 _rewardRate) external;
    function setRewardWeights(uint256[] memory _rewardWeights) external;
    function tokenPoolIds(address) view external returns (uint256);
    function totalRewardWeight() view external returns (uint256);
    function withdraw(uint256 _poolId, uint256 _withdrawAmount) external;
}