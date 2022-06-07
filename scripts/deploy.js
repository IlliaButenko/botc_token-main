// scripts/deploy.js
async function main() {
    // We get the contract to deploy
    const BOTC = await ethers.getContractFactory("BOTC");
    console.log("Deploying BOTC...");
    const botc = await BOTC.deploy();
    await botc.deployed();
    console.log("BOTC deployed to:", botc.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });