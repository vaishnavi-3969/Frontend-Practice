import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function () {
    it("should say hi", async function () {
        //1. setup 
        //2. deploy our contract
        //3. call our functions to start

        //2.
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello world");
    });
});

describe("false test", function () {
    it("should not say hi", async function () {
        //1. setup 
        //2. deploy our contract
        //3. call our functions to start

        //2.
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.not.equal("Something other than Hello ");
    });
});