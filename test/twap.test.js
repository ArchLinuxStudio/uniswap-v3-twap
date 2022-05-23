const { expect } = require("chai")
const { ethers } = require("hardhat")

const FACTORY = "0x1F98431c8aD98523631AE4a59f267346ea31F984"
// WBTC
const TOKEN_0 = "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f"
const DECIMALS_0 = 8n
// WETH
const TOKEN_1 = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
const DECIMALS_1 = 18n
// 0.05%
const FEE = 500

describe("UniswapV3Twap", () => {
  it("get price", async () => {
    const UniswapV3Twap = await ethers.getContractFactory("UniswapV3Twap")
    const twap = await UniswapV3Twap.deploy(FACTORY, TOKEN_0, TOKEN_1, FEE)
    await twap.deployed()

    // try 30min 60min or more in the production environment.
    const price = await twap.estimateAmountOut(TOKEN_1, 10n ** DECIMALS_1, 10)

    console.log(`price: ${price}`)
  })
})
