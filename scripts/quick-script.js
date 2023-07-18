const { starknet } = require("hardhat");

async function main() {
  const account = await starknet.OpenZeppelinAccount.getAccountFromAddress(
    "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a", // OZ ACCOUNT ADDRESS
    "0xe3e70682c2094cac629f6fbed82c07cd" // OZ PRIVATE KEY
  );

  const contractFactory = await starknet.getContractFactory("Hello");
  await account.declare(contractFactory);
  const contract = await account.deploy(contractFactory);

  console.log("Deployed to:", contract.address);

  // const { res: balanceBefore } = await contract.call(
  //   "get_balance_of_contract_v1"
  // );
  // console.log("Balance before invoke: ", balanceBefore);

  // await account.invoke(contract, "increase_balance_of_contract_v1", {
  //   amount: 30,
  // });
  // const { res: balanceAfter } = await contract.call(
  //   "get_balance_of_contract_v1"
  // );
  // console.log("Balance after invoke:", balanceAfter);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
