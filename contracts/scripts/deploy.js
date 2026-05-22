// This script deploys our GM contract to the blockchain
// Run with: npm run deploy:testnet  (or deploy:local for local testing)

const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying GM contract...\n");

  // Get the deployer account (your wallet)
  const [deployer] = await hre.ethers.getSigners();
  console.log("📬 Deploying from address:", deployer.address);

  // Deploy the contract
  const GM = await hre.ethers.getContractFactory("GM");
  const gm = await GM.deploy();

  // Wait for deployment to finish
  await gm.waitForDeployment();

  const address = await gm.getAddress();
  console.log("\n✅ GM contract deployed!");
  console.log("📍 Contract address:", address);
  console.log("\n🔍 View on explorer:");
  console.log(`   https://testnet.arcscan.app/address/${address}`);
  console.log("\n📋 Copy this address into your frontend .env file:");
  console.log(`   VITE_GM_CONTRACT_ADDRESS=${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
