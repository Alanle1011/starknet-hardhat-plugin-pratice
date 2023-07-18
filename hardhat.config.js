require("@nomicfoundation/hardhat-toolbox");
require("@shardlabs/starknet-hardhat-plugin");
require("dotenv").config();
module.exports = {
  solidity: "0.6.12",
  starknet: {
    venv: "~/cairo_venv",
    // recompile: false,
    cairo1BinDir: "~/.cairo/target/release",

    network: "devnet",
  },
  networks: {
    devnet: {
      url: "http://127.0.0.1:5050",
    },
  },
};
