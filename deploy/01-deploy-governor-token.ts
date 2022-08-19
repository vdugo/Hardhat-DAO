import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types'

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
)
{
    console.log('deploy governance token')
}

export default deployGovernanceToken