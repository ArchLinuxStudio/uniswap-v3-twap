# uniswap-v3-twap

A gas optimized version to get twap with uniswap oracle. If want to use a simple way, just call function `OracleLibrary.consult`.

```shell
npm i
npx hardhat compile

# Arbitrum layer2, change to your url if you want to use a different net
npx hardhat node --fork https://arb1.arbitrum.io/rpc

npx hardhat test --network localhost
```
