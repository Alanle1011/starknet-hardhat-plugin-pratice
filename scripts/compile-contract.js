const hardhat = require("hardhat");

async function main() {
  await hardhat.run("starknet-compile", {
    paths: ["contracts/Example.cairo"],
    allowedLibfuncsListName: "experimental_v0.1.0",
    addPythonicHints: true,
  });
  await hardhat.run("starknet-compile", {
    paths: ["contracts/Hello.cairo"],
    allowedLibfuncsListName: "experimental_v0.1.0",
    addPythonicHints: true,
  });
  await hardhat.run("starknet-compile-deprecated", {
    paths: ["contracts/cairo0.cairo"],
    
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
