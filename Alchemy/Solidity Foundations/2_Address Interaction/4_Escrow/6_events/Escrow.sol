// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;
    event Approved(uint);

    constructor(address _arbiter, address _beneficiary) payable {
        beneficiary = _beneficiary;
        arbiter = _arbiter;
        depositor = msg.sender;
    }

    function approve() external {
        require(msg.sender == arbiter, "Only the arbiter can approve");

        uint balanceToSend = address(this).balance;
        beneficiary.call{value: balanceToSend}("");
        emit Approved(balanceToSend);
    }
}
