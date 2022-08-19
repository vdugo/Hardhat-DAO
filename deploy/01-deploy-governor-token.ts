import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types'

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
)
{
    const { getNamedAccounts, deployments, network } = hre

    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()

    log('Deploying governance token...')
    const governanceToken = await deploy('GovernanceToken', {
        from: deployer,
        args: [],
        log: true
    })
    log(`Deployed governance token to ${governanceToken.address}`)
}

export default deployGovernanceToken