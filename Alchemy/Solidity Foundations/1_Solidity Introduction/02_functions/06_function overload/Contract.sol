// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {
    function double(uint x) external pure returns (uint sum){
        sum = 2*x;
    }
    function double(uint x, uint y) external pure returns(uint, uint){
        return (x*2,y*2);
    }
}