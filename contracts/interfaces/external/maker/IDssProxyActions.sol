// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.5.0;

interface GemLike {
  function approve(address, uint256) external;

  function transfer(address, uint256) external;

  function transferFrom(
    address,
    address,
    uint256
  ) external;

  function deposit() external payable;

  function withdraw(uint256) external;
}

interface ManagerLike {
  function cdpCan(
    address,
    uint256,
    address
  ) external view returns (uint256);

  function ilks(uint256) external view returns (bytes32);

  function owns(uint256) external view returns (address);

  function urns(uint256) external view returns (address);

  function vat() external view returns (address);

  function open(bytes32, address) external returns (uint256);

  function give(uint256, address) external;

  function cdpAllow(
    uint256,
    address,
    uint256
  ) external;

  function urnAllow(address, uint256) external;

  function frob(
    uint256,
    int256,
    int256
  ) external;

  function flux(
    uint256,
    address,
    uint256
  ) external;

  function move(
    uint256,
    address,
    uint256
  ) external;

  function exit(
    address,
    uint256,
    address,
    uint256
  ) external;

  function quit(uint256, address) external;

  function enter(address, uint256) external;

  function shift(uint256, uint256) external;
}

interface VatLike {
  function can(address, address) external view returns (uint256);

  function ilks(bytes32)
    external
    view
    returns (
      uint256,
      uint256,
      uint256,
      uint256,
      uint256
    );

  function dai(address) external view returns (uint256);

  function urns(bytes32, address) external view returns (uint256, uint256);

  function frob(
    bytes32,
    address,
    address,
    address,
    int256,
    int256
  ) external;

  function hope(address) external;

  function move(
    address,
    address,
    uint256
  ) external;
}

interface GemJoinLike {
  function dec() external returns (uint256);

  function gem() external returns (GemLike);

  function join(address, uint256) external payable;

  function exit(address, uint256) external;
}

interface GNTJoinLike {
  function bags(address) external view returns (address);

  function make(address) external returns (address);
}

interface DaiJoinLike {
  function vat() external returns (VatLike);

  function dai() external returns (GemLike);

  function join(address, uint256) external payable;

  function exit(address, uint256) external;
}

interface HopeLike {
  function hope(address) external;

  function nope(address) external;
}

interface EndLike {
  function fix(bytes32) external view returns (uint256);

  function cash(bytes32, uint256) external;

  function free(bytes32) external;

  function pack(uint256) external;

  function skim(bytes32, address) external;
}

interface JugLike {
  function drip(bytes32) external returns (uint256);
}

interface PotLike {
  function pie(address) external view returns (uint256);

  function drip() external returns (uint256);

  function join(uint256) external;

  function exit(uint256) external;
}

interface ProxyRegistryLike {
  function proxies(address) external view returns (address);

  function build(address) external returns (address);
}

interface ProxyLike {
  function owner() external view returns (address);
}

interface IDssProxyActions {
  function transfer(
    address gem,
    address dst,
    uint256 amt
  ) external;

  function ethJoin_join(address apt, address urn) external payable;

  function gemJoin_join(
    address apt,
    address urn,
    uint256 amt,
    bool transferFrom
  ) external;

  function hope(address obj, address usr) external;

  function nope(address obj, address usr) external;

  function open(
    address manager,
    bytes32 ilk,
    address usr
  ) external;

  function give(
    address manager,
    uint256 cdp,
    address usr
  ) external;

  function giveToProxy(
    address proxyRegistry,
    address manager,
    uint256 cdp,
    address dst
  ) external;

  function cdpAllow(
    address manager,
    uint256 cdp,
    address usr,
    uint256 ok
  ) external;

  function urnAllow(
    address manager,
    address usr,
    uint256 ok
  ) external;

  function flux(
    address manager,
    uint256 cdp,
    address dst,
    uint256 wad
  ) external;

  function move(
    address manager,
    uint256 cdp,
    address dst,
    uint256 rad
  ) external;

  function frob(
    address manager,
    uint256 cdp,
    int256 dink,
    int256 dart
  ) external;

  function quit(
    address manager,
    uint256 cdp,
    address dst
  ) external;

  function enter(
    address manager,
    address src,
    uint256 cdp
  ) external;

  function shift(
    address manager,
    uint256 cdpSrc,
    uint256 cdpOrg
  ) external;

  function makeGemBag(address gemJoin) external;

  function lockETH(
    address manager,
    address ethJoin,
    uint256 cdp
  ) external payable;

  function safeLockETH(
    address manager,
    address ethJoin,
    uint256 cdp,
    address owner
  ) external payable;

  function lockGem(
    address manager,
    address gemJoin,
    uint256 cdp,
    uint256 amt,
    bool transferFrom
  ) external;

  function safeLockGem(
    address manager,
    address gemJoin,
    uint256 cdp,
    uint256 amt,
    bool transferFrom,
    address owner
  ) external;

  function freeETH(
    address manager,
    address ethJoin,
    uint256 cdp,
    uint256 wad
  ) external;

  function freeGem(
    address manager,
    address gemJoin,
    uint256 cdp,
    uint256 amt
  ) external;

  function exitETH(
    address manager,
    address ethJoin,
    uint256 cdp,
    uint256 wad
  ) external;

  function exitGem(
    address manager,
    address gemJoin,
    uint256 cdp,
    uint256 amt
  ) external;

  function draw(
    address manager,
    address jug,
    address daiJoin,
    uint256 cdp,
    uint256 wad
  ) external;

  function wipe(
    address manager,
    address daiJoin,
    uint256 cdp,
    uint256 wad
  ) external;

  function safeWipe(
    address manager,
    address daiJoin,
    uint256 cdp,
    uint256 wad,
    address owner
  ) external;

  function wipeAll(
    address manager,
    address daiJoin,
    uint256 cdp
  ) external;

  function safeWipeAll(
    address manager,
    address daiJoin,
    uint256 cdp,
    address owner
  ) external;

  function lockETHAndDraw(
    address manager,
    address jug,
    address ethJoin,
    address daiJoin,
    uint256 cdp,
    uint256 wadD
  ) external payable;

  function openLockETHAndDraw(
    address manager,
    address jug,
    address ethJoin,
    address daiJoin,
    bytes32 ilk,
    uint256 wadD
  ) external payable returns (uint256 cdp);

  function lockGemAndDraw(
    address manager,
    address jug,
    address gemJoin,
    address daiJoin,
    uint256 cdp,
    uint256 amtC,
    uint256 wadD,
    bool transferFrom
  ) external;

  function openLockGemAndDraw(
    address manager,
    address jug,
    address gemJoin,
    address daiJoin,
    bytes32 ilk,
    uint256 amtC,
    uint256 wadD,
    bool transferFrom
  ) external returns (uint256 cdp);

  function openLockGNTAndDraw(
    address manager,
    address jug,
    address gntJoin,
    address daiJoin,
    bytes32 ilk,
    uint256 amtC,
    uint256 wadD
  ) external returns (address bag, uint256 cdp);

  function wipeAndFreeETH(
    address manager,
    address ethJoin,
    address daiJoin,
    uint256 cdp,
    uint256 wadC,
    uint256 wadD
  ) external;

  function wipeAllAndFreeETH(
    address manager,
    address ethJoin,
    address daiJoin,
    uint256 cdp,
    uint256 wadC
  ) external;

  function wipeAndFreeGem(
    address manager,
    address gemJoin,
    address daiJoin,
    uint256 cdp,
    uint256 amtC,
    uint256 wadD
  ) external;

  function wipeAllAndFreeGem(
    address manager,
    address gemJoin,
    address daiJoin,
    uint256 cdp,
    uint256 amtC
  ) external;
}
