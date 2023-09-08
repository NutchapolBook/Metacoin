/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    'truffle-dashboard': {
      url: "http://localhost:24012/rpc"
    }
  },
};
