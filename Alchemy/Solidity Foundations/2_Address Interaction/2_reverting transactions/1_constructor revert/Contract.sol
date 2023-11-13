// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {
    constructor() payable{
        require(address(this).balance > 0);
    }
}