import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types'
import { VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE } from "../helper-hardhat-config";

const deployGovernorContract: DeployFunction = async(hre: HardhatRuntimeEnvironment) =>
{
    const { getNamedAccounts, deployments, network } = hre

    const { deploy, log, get } = deployments

    const { deployer } = await getNamedAccounts()

    const governanceToken = await get('GovernanceToken')
    const timelock = await get('TimeLock')
    log('Deploying governor')
    const governorContract = await deploy('GovernorContract', {
        from: deployer,
        args: [
            governanceToken.address,
            timelock.address,
            VOTING_DELAY,
            VOTING_PERIOD,
            QUORUM_PERCENTAGE
        ]
    })
}