# Shrine V2

The Myobu Shrine V2 contracts, receives ETH or WETH and sends them to the Myobu Uniswap Pair to increase value of the Myobu token

## Requirements:

Node.js

## Config:

Secrets: Rename the secrets.json.dist to secrets.json and put in the values

Config: Change config in config.json

## First:

    yarn

## Available Scripts:

### `yarn test`

### `yarn test:testnet`

Runs tests in the `test` directory, on a local network or on testnet

### `yarn compile`

Compiles all the soliidity contracts

### `yarn typechain`

Use typechain to generate types for the solidity contracts

### `yarn coverage`

Generate code coverage for the contracts

### `yarn deploy`

### `yarn deploy:testnet`

### `yarn deploy:mainnet`

Deploy contracts, deploy scripts in ./deploy/

Can be done on mainnet, testnet, or the local network

### `yarn lint`

### `yarn lint:fix`

Lints the solidity and typescript code

### `yarn format`

### `yarn format:fix`

Formats the solidity and typescript code

### `yarn verify:testnet <address>`

### `yarn verify:mainnet <address>`

Verfies the contracts on etherscan
