// scripts/index.js
async function main() {
    // Our code will go here
    // Retrieve accounts from the local node
const accounts = await ethers.provider.listAccounts();
console.log(accounts);

// Set up an ethers contract, representing our deployed Box instance
const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
const Box = await ethers.getContractFactory("Box");
const box = await Box.attach(address);
// Call the retrieve() function of the deployed Box contract
value = await box.retrieve();
console.log("Box value is", value.toString());

// Send a transaction to store() a new value in the Box
await box.store(23);
// Call the retrieve() function of the deployed Box contract
const a = await box.retrieve();
console.log("Box value is", a.toString());

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });