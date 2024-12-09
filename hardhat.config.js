/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-ethers");
const {alchemyApiKey, mnemonic} = require('./secrets.json')
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  }
};
