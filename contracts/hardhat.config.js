require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Your private key from MetaMask (never share this!)
// Add it to the .env file as: PRIVATE_KEY=0xYOURKEY
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000001";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Local test network (run with: npm run node)
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    // Arc Testnet — where we deploy for real testing
    arcTestnet: {
      url: "https://rpc.testnet.arc.network",
      chainId: 5042002,
      accounts: [PRIVATE_KEY],
    },
  },
  // Show gas costs in USD when running tests
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};
