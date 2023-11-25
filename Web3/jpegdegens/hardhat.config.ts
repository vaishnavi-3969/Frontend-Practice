import "@nomiclabs/hardhat-waffle"
import '@nomiclabs/hardhat-ethers';
import "hardhat-gas-reporter";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia:{
      url: "https://polygon-mumbai.g.alchemy.com/v2/SePjrFO0UF0M7nPm62IhbXeuIcXst8Ft",
      accounts: ["0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"]
    }
  }
}; 
