import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import deployContract from "../scripts/deployContract"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  await deployContract(hre, "ShrineV2")
}

export default func
