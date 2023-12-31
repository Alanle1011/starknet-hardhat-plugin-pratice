const { starknet } = require("hardhat");

async function keypress() {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
}

(async () => {
  const account = await starknet.OpenZeppelinAccount.createAccount();
  console.log(
    `Account created at ${account.address} with private key=${account.privateKey} and public key=${account.publicKey}`
  );
  console.log(
    "PLEASE FUND THE ACCOUNT. Even after you get a confirmation that the funds were transferred, you may want to wait for a couple of minutes."
  );
  console.log("Press any key to continue...");
  await keypress();
  console.log("Deploying...");
  await account.deployAccount({ maxFee: 1e18 });
  console.log("Deployed");
})()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
