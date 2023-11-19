// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;

    constructor(address _arbiter,  address _beneficiary) payable{
        beneficiary = _beneficiary;
        arbiter = _arbiter;
        depositor = msg.sender;
    }
    function approve() external{
        beneficiary.call{value: address(this).balance}("");
    }
}