const hre = require("hardhat");

async function main() {
  // Get the current provider
  const provider = hre.ethers.provider;

  // Get the contract to deploy
  const Box = await hre.ethers.getContractFactory("Box");

  // Estimate the gas required for deployment
  const estimatedGas = await provider.estimateGas(Box.getDeployTransaction());
  console.log(`Estimated gas: ${estimatedGas.toString()}`);

  // Fetch the current gas price
  const feeData = await provider.getFeeData();
  const gasPrice = feeData.gasPrice; // Using gasPrice for legacy transactions
  console.log(`Current gas price: ${hre.ethers.formatUnits(gasPrice, "gwei")} gwei`);

  // Calculate the full cost in ETH
  const totalCost = estimatedGas * gasPrice;
  console.log(`Estimated deployment cost: ${hre.ethers.formatEther(totalCost)} ETH`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
