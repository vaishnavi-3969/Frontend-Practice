// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {
    address public deployer;
    constructor() payable{
        require(address(this).balance > 0);
        deployer = msg.sender;
    }
    function withdraw() public{
        require(msg.sender==deployer);
        (bool success, ) = deployer.call{value: address(this).balance}("");
        require(success);
    }
}