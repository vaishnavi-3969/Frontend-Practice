import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter = await C.deploy();
    await counter.deployed();
    console.log("Counter deployed to:", counter.address);
    return counter;
}

async function count(counter) {
    await counter.count();
    console.log("Counter ",await counter.getCounter());
}

deploy().then(count); 