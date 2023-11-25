import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy(); 
    //its going to build a json request -> rpc -> that newtork will then begin some transaction
    //and then it will return a transaction hash    
    await hello.deployed();

    console.log("HelloWorld deployed to:", hello.address);
    return hello;
}

// @ts-ignore
async function sayHello(hello){
    console.log("Say Hello: ",await hello.hello());
}

deploy().then(sayHello);
