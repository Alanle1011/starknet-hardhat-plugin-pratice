const { starknet } = require("hardhat");
const { getOZAccount } = require("../utils/getOzAccount");
async function main() {
  /* DEVNET account */
  // const account = await starknet.OpenZeppelinAccount.getAccountFromAddress(
  //   "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a", // OZ ACCOUNT ADDRESS
  //   "0xe3e70682c2094cac629f6fbed82c07cd" // OZ PRIVATE KEY
  // );

  /* alpha-goerli account */
  const account = await getOZAccount();

  const contractFactory = await starknet.getContractFactory("cairo0");
  await account.declare(contractFactory);
  const contract = await account.deploy(contractFactory);

  console.log("Deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
