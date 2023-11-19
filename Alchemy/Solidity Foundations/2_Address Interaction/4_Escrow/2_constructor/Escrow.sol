// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;

    constructor(address _arbiter,  address _beneficiary){
        beneficiary = _beneficiary;
        arbiter = _arbiter;
        depositor = msg.sender;
    }
}