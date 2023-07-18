const hardhat = require("hardhat");
const { starknet } = require("hardhat");
const { getOZAccount } = require("../utils/getOzAccount");

async function main() {
  const account = await getOZAccount();
  const contractFactory = await hardhat.starknet.getContractFactory("Example");

  //declare
  await account.declare(contractFactory, { maxFee: 1e18 });
  console.log("Contract Declared");
  //deploy
  const contract = await account.deploy(contractFactory);
  console.log("Deployed to:", contract.address);

  // //getbalance
  // const { res: balanceBefore } = await contract.call("get_balance");
  // console.log("Balance before invoke: ", balanceBefore);

  // //increase balance
  // await account.invoke(contract, "increase_balance", { amount: 10 });
  // const { res: balanceAfter } = await contract.call("get_balance");
  // console.log("Balance after invoke:", balanceAfter);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
