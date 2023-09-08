This project creted for practice [Truffle](https://trufflesuite.com/docs/truffle/quickstart/).
- [Test](#test)
- [Compile](#compile)
- [Migrate](#migrate-with-truffle-develop)
  - [with Truffle Develop](#migrate-with-truffle-develop)
  - [with Truffle Develop](#migrate-with-truffle-console)
- [Deploy](#deploy-to-mainnet-testnet-and-beyond)
  - [Using Truffle Dashboard](#using-truffle-dashboard)
- [Truffle Dashboard](#truffle-dashboard)
  - [Using Truffle Dashboard with the Hardhat plugin](#using-truffle-dashboard-with-the-hardhat-plugin)

Create MetaCoin box for example applications and project templates

```ruby
truffle unbox metacoin
```

### Test

run all test

```ruby
truffle test
```

test individually

```ruby
truffle test ./test/TestMetaCoin.sol
truffle test ./test/metacoin.js.
```

### Compile

```ruby
truffle compile
```

### Migrate with Truffle Develop

- create built-in personal blockchain that can be used for testing

```ruby
truffle develop
```

- command to deploy your compiled contracts to the blockchain is truffle migrate

```ruby
migrate
```

### Migrate with Truffle Console

Set up ganache

```ruby
npm install ganache
ganache --wallet.seed myCustomSeed
```

Open another terminal and deploy your compiled contracts

```ruby
truffle migrate
```

### Console

To interact with the contract, you can use the Truffle console. The Truffle console is similar to Truffle Develop, except it connects to an existing blockchain (in this case, the one generated by Ganache). 

```truffle console```

You will see the following prompt:
```truffle(development)>```

```
truffle(development)> let instance = await MetaCoin.deployed()
truffle(development)> let accounts = await web3.eth.getAccounts()
```

Check MetaCoin balance of account[0]

```ruby
let balance = await instance.getBalance(accounts[0])
balance.toNumber()
10000
```

Transfer some metacoin from one account to another

```ruby
instance.sendCoin(accounts[1], 500)
{
  tx: '0x16f70ba997a16346185ae468179957acbcde7b9feb6a457782f4ce93981c5ee2',
  receipt: {
    transactionHash: '0x16f70ba997a16346185ae468179957acbcde7b9feb6a457782f4ce93981c5ee2',
    transactionIndex: 0,
    blockNumber: 3,
    blockHash: '0x38fb6da7e8842647cbb0b5aee89cda93ad0cca26d79dd54f0c20654d33b1ef3a',    from: '0xa1ef58670368eccb27edc6609dea0fefc5884f09',
    to: '0x3ec9745c7bc93024e4ea3bac26b89172d92c4c26',
    cumulativeGasUsed: 52297,
    gasUsed: 52297,
    contractAddress: null,
    logs: [ [Object] ],
    logsBloom: '0x00000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000400000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000011000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000002000000000000000000000010000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    effectiveGasPrice: 3173590045,        
    type: '0x2',
    rawLogs: [ [Object] ]
  },
  logs: [
    {
      address: '0x3Ec9745c7Bc93024e4EA3BaC26B89172D92C4c26',
      blockHash: '0x38fb6da7e8842647cbb0b5aee89cda93ad0cca26d79dd54f0c20654d33b1ef3a',
      blockNumber: 3,
      logIndex: 0,
      removed: false,
      transactionHash: '0x16f70ba997a16346185ae468179957acbcde7b9feb6a457782f4ce93981c5ee2',
      transactionIndex: 0,
      id: 'log_94d36c5f',
      event: 'Transfer',
      args: [Result]
    }
  ]
}
```

Check the balance of the account that received the metacoin

```ruby
let received = await instance.getBalance(accounts[1])
received.toNumber()
500
```

Check the balance of the account that sent the Metacoin

```ruby
let newBalance = await instance.getBalance(accounts[0])
newBalance.toNumber()
9500
```

## Deploy to Mainnet, Testnet, and Beyond

### Using Truffle Dashboard

```truffle dashboard```

deploy, test, and run the console using --network dashboard.

```ruby
truffle deploy --network dashboard
truffle test --network dashboard
truffle console --network dashboard
```

### Truffle Dashboard

run the *truffle dashboard* command in a separate terminal window.

```ruby
truffle dashboard [--port <number>] [--host <string>] [--verbose]

Truffle Dashboard running at http://localhost:24012
DashboardProvider RPC endpoint running at http://localhost:24012/rpc

```

setup dashboard part in truffle-config.js

```ruby
module.exports = {
  // ... rest of truffle config

  dashboard: {
    port: 24012,
  }

  networks: {
    // ... network configurations, including the network named 'dashboard'
  }
}

```

This built in network can be used with all your deployments or scripts.

```ruby
truffle migrate --network dashboard
```

Result when confirm transaction on Truffle dashboard

```ruby
Compiling your contracts...===========================> Compiling .\contracts\ConvertLib.sol
> Compiling .\contracts\MetaCoin.sol
> Artifacts written to C:\Projects\truffle\build\contracts
> Compiled successfully using:
   - solc: 0.8.13+commit.abaa5c0e.Emscripten.clang    


Starting migrations...     
======================     
> Network name:    'dashboard'
> Network id:      11155111> Block gas limit: 30000000 (0x1c9c380)


1_deploy_contracts.js      
=====================      

   Deploying 'ConvertLib'  
   ----------------------  
   > transaction hash:    0x4500152dcf91a0e88d49262ce417439888596d5f9ec9d7f02211739b48fb9b08message.        
   > Blocks: 4            Seconds: 499
   > contract address:    0xb4cAa1f98523a088EA517ac5b9926A87764e2732
   > block number:        4246093
   > block timestamp:     1694154180
   > account:             0x6507A5F34D98B8345e182EF588AB14A7F4E714AE
   > balance:             5.072961213942145709        
   > gas used:            157604 (0x267a4)
   > gas price:           2.500008456 gwei
   > value sent:          0 ETH
   > total cost:          0.000394011332699424 ETH


   Linking
   -------
   * Contract: MetaCoin <--> Library: ConvertLib (at address: 0xb4cAa1f98523a088EA517ac5b9926A87764e2732)

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0x2f69bf7069b36b4cccd2c7c23e88ef005f4a9710fa43d21345d46fc8e724bea2allet for a transactio
   > Blocks: 3            Seconds: 44       
   > contract address:    0x131a0d10a47bdC768B49A5729B4Efbd45Df01627
   > block number:        4246097
   > block timestamp:     1694154228        
   > account:             0x6507A5F34D98B8345e182EF588AB14A7F4E714AE
   > balance:             5.071919459522625509
   > gas used:            416700 (0x65bbc)  
   > gas price:           2.500016912 gwei  
   > value sent:          0 ETH
   > total cost:          0.0010417570472304 ETH

   > Saving artifacts
   -------------------------------------    
   > Total cost:     0.001435768379929824 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.001435768379929824 
ETH
```

Any additional network options or overrides can be provided by adding a network called "dashboard" to your truffle-config.js file and providing network options like you would a regular network.

```ruby
module.exports = {
  // ... rest of truffle config

  networks: {
    // ... rest of network config

    dashboard: {
      networkCheckTimeout: 120000,
    }
  }

  dashboard: {
    // ... dashboard host/port config
  }
};
```

```ruby
truffle console --network dashboard
```

### Using Truffle Dashboard with the Hardhat plugin

including decoded transaction information, setup for your project. The Hardhat plugin by `npx hardhat compile` sending the compiled artifacts to Truffle Dashboard, enabling seamless integration with your existing workflow.


When using the Truffle Dashboard with Hardhat, you need to create a network configuration inside your `hardhat.config.js` file that specifies the Truffle Dashboard's RPC URL.

```ruby
module.exports = {
  // ... rest of hardhat config

  networks: {
    // ... rest of network config

    'truffle-dashboard': {
      url: "http://localhost:24012/rpc"
    }
  },
};
```

From there, it can be used with any Hardhat task or tools like hardhat-deploy.

```ruby
hardhat deploy --network truffle-dashboard
```