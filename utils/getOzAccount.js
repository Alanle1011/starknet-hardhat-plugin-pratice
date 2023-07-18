require("dotenv").config();
const ACCOUNT_ADDRESS = process.env.ACCOUNT_ADDRESS;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
/**
 * Returns an instance of OZAccount. Expected to be deployed
 */
async function getOZAccount() {
  const account = await starknet.OpenZeppelinAccount.getAccountFromAddress(
    // address from previous step
    ACCOUNT_ADDRESS,
    // private key from previous step
    ACCOUNT_PRIVATE_KEY
  );
  return account;
}

module.exports = { getOZAccount };
