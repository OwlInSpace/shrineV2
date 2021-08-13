import { ethers } from "hardhat"
import { ShrineV2, IWETH, IUniswapV2Pair } from "../typechain/"
import { describe, it, before } from "mocha"
import { expect } from "chai"

const amountOfEtherToTestWith = ethers.utils.parseEther("0.1")

let Contract: ShrineV2
let Pair: IUniswapV2Pair
let WETH: IWETH

describe("Deployment", function () {
  before(async function () {
    Pair = <IUniswapV2Pair>(
      await ethers.getContractAt(
        "IUniswapV2Pair",
        "0xa440baF25Ac41B26A6EA40F864542B54a76CE530"
      )
    )
    WETH = <IWETH>(
      await ethers.getContractAt(
        "IWETH",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      )
    )
  })

  it("Deploy contract", async function () {
    const _Contract = await ethers.getContractFactory("ShrineV2")
    Contract = <ShrineV2>await _Contract.deploy()
    await Contract.deployed()
  })
})

describe("Sends WETH to pair and updates reserves", function () {
  it("Can receive ETH", async function () {
    await Contract.fallback({ value: amountOfEtherToTestWith })
  })

  it("Works correctly", async function () {
    const oldPairBalance = await WETH.balanceOf(Pair.address)
    const oldPairReservesWETH = (await Pair.getReserves())[1]
    await Contract.sendWETHToPair()
    expect(await WETH.balanceOf(Pair.address)).to.be.equal(
      oldPairBalance.add(amountOfEtherToTestWith)
    )
    expect((await Pair.getReserves())[1]).to.be.equal(
      oldPairReservesWETH.add(amountOfEtherToTestWith)
    )
  })
})
