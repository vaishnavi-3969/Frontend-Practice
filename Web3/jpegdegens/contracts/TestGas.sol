// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract TestGas {
    uint a;
    uint b;
    uint c;

    function test1() public{
        a++;
    }

    function test2() public{
        a++;
        b++;
    }
    function test3() public {
        a++;
        b++;
        c++;
    }
    function test4() public{
        c = a + b;
    }
    function test5() public {
        test4();
        b = a + c;
    }
}








