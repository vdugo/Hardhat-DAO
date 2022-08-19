import 'hardhat-deploy'
import '@nomiclabs/hardhat-ethers'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: "0.8.8",
  networks: {
    hardhat: {
      chainId: 31337
    },
    localhost: {
      chainId: 31337
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};

export default config;
