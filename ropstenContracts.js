module.exports.nodes = {
  infura: 'https://ropsten.infura.io/v3/f6427a6723594cdd8affb596d357d268',
  rcn: 'http://ropsten.node.rcn.loans:8545',
  local: 'http://localhost:8545',
};

module.exports.RCNToken = '0x2f45b6Fb2F28A73f110400386da31044b2e953D4';

module.exports.markets = {
  uniswap: {
    address: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
    factoryABI: [
      {
        'name': 'NewExchange',
        'inputs': [
          {
            'type': 'address',
            'name': 'token',
            'indexed': true
          },
          {
            'type': 'address',
            'name': 'exchange',
            'indexed': true
          }
        ],
        'anonymous': false,
        'type': 'event'
      },
      {
        'name': 'initializeFactory',
        'outputs': [],
        'inputs': [
          {
            'type': 'address',
            'name': 'template'
          }
        ],
        'constant': false,
        'payable': false,
        'type': 'function',
        'gas': 35725
      },
      {
        'name': 'createExchange',
        'outputs': [
          {
            'type': 'address',
            'name': 'out'
          }
        ],
        'inputs': [
          {
            'type': 'address',
            'name': 'token'
          }
        ],
        'constant': false,
        'payable': false,
        'type': 'function',
        'gas': 187911
      },
      {
        'name': 'getExchange',
        'outputs': [
          {
            'type': 'address',
            'name': 'out'
          }
        ],
        'inputs': [
          {
            'type': 'address',
            'name': 'token'
          }
        ],
        'constant': true,
        'payable': false,
        'type': 'function',
        'gas': 715
      },
      {
        'name': 'getToken',
        'outputs': [
          {
            'type': 'address',
            'name': 'out'
          }
        ],
        'inputs': [
          {
            'type': 'address',
            'name': 'exchange'
          }
        ],
        'constant': true,
        'payable': false,
        'type': 'function',
        'gas': 745
      },
      {
        'name': 'getTokenWithId',
        'outputs': [
          {
            'type': 'address',
            'name': 'out'
          }
        ],
        'inputs': [
          {
            'type': 'uint256',
            'name': 'token_id'
          }
        ],
        'constant': true,
        'payable': false,
        'type': 'function',
        'gas': 736
      },
      {
        'name': 'exchangeTemplate',
        'outputs': [
          {
            'type': 'address',
            'name': 'out'
          }
        ],
        'inputs': [],
        'constant': true,
        'payable': false,
        'type': 'function',
        'gas': 633
      },
      {
        'name': 'tokenCount',
        'outputs': [
          {
            'type': 'uint256',
            'name': 'out'
          }
        ],
        'inputs': [],
        'constant': true,
        'payable': false,
        'type': 'function',
        'gas': 663
      }
    ],
    exchangeABI: [
      { 'name': 'TokenPurchase', 'inputs': [{ 'type': 'address', 'name': 'buyer', 'indexed': true }, { 'type': 'uint256', 'name': 'eth_sold', 'indexed': true }, { 'type': 'uint256', 'name': 'tokens_bought', 'indexed': true }], 'anonymous': false, 'type': 'event' }, { 'name': 'EthPurchase', 'inputs': [{ 'type': 'address', 'name': 'buyer', 'indexed': true }, { 'type': 'uint256', 'name': 'tokens_sold', 'indexed': true }, { 'type': 'uint256', 'name': 'eth_bought', 'indexed': true }], 'anonymous': false, 'type': 'event' }, { 'name': 'AddLiquidity', 'inputs': [{ 'type': 'address', 'name': 'provider', 'indexed': true }, { 'type': 'uint256', 'name': 'eth_amount', 'indexed': true }, { 'type': 'uint256', 'name': 'token_amount', 'indexed': true }], 'anonymous': false, 'type': 'event' }, { 'name': 'RemoveLiquidity', 'inputs': [{ 'type': 'address', 'name': 'provider', 'indexed': true }, { 'type': 'uint256', 'name': 'eth_amount', 'indexed': true }, { 'type': 'uint256', 'name': 'token_amount', 'indexed': true }], 'anonymous': false, 'type': 'event' }, { 'name': 'Transfer', 'inputs': [{ 'type': 'address', 'name': '_from', 'indexed': true }, { 'type': 'address', 'name': '_to', 'indexed': true }, { 'type': 'uint256', 'name': '_value', 'indexed': false }], 'anonymous': false, 'type': 'event' }, { 'name': 'Approval', 'inputs': [{ 'type': 'address', 'name': '_owner', 'indexed': true }, { 'type': 'address', 'name': '_spender', 'indexed': true }, { 'type': 'uint256', 'name': '_value', 'indexed': false }], 'anonymous': false, 'type': 'event' }, { 'name': 'setup', 'outputs': [], 'inputs': [{ 'type': 'address', 'name': 'token_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 175875 }, { 'name': 'addLiquidity', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'min_liquidity' }, { 'type': 'uint256', 'name': 'max_tokens' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': true, 'type': 'function', 'gas': 82605 }, { 'name': 'removeLiquidity', 'outputs': [{ 'type': 'uint256', 'name': 'out' }, { 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'amount' }, { 'type': 'uint256', 'name': 'min_eth' }, { 'type': 'uint256', 'name': 'min_tokens' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 116814 }, { 'name': '__default__', 'outputs': [], 'inputs': [], 'constant': false, 'payable': true, 'type': 'function' }, { 'name': 'ethToTokenSwapInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'min_tokens' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': true, 'type': 'function', 'gas': 12757 }, { 'name': 'ethToTokenTransferInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'min_tokens' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }], 'constant': false, 'payable': true, 'type': 'function', 'gas': 12965 }, { 'name': 'ethToTokenSwapOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': true, 'type': 'function', 'gas': 50455 }, { 'name': 'ethToTokenTransferOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }], 'constant': false, 'payable': true, 'type': 'function', 'gas': 50663 }, { 'name': 'tokenToEthSwapInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_eth' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 47503 }, { 'name': 'tokenToEthTransferInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_eth' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 47712 }, { 'name': 'tokenToEthSwapOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'eth_bought' }, { 'type': 'uint256', 'name': 'max_tokens' }, { 'type': 'uint256', 'name': 'deadline' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 50175 }, { 'name': 'tokenToEthTransferOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'eth_bought' }, { 'type': 'uint256', 'name': 'max_tokens' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 50384 }, { 'name': 'tokenToTokenSwapInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_tokens_bought' }, { 'type': 'uint256', 'name': 'min_eth_bought' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'token_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 51007 }, { 'name': 'tokenToTokenTransferInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_tokens_bought' }, { 'type': 'uint256', 'name': 'min_eth_bought' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }, { 'type': 'address', 'name': 'token_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 51098 }, { 'name': 'tokenToTokenSwapOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'max_tokens_sold' }, { 'type': 'uint256', 'name': 'max_eth_sold' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'token_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 54928 }, { 'name': 'tokenToTokenTransferOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'max_tokens_sold' }, { 'type': 'uint256', 'name': 'max_eth_sold' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }, { 'type': 'address', 'name': 'token_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 55019 }, { 'name': 'tokenToExchangeSwapInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_tokens_bought' }, { 'type': 'uint256', 'name': 'min_eth_bought' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'exchange_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 49342 }, { 'name': 'tokenToExchangeTransferInput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }, { 'type': 'uint256', 'name': 'min_tokens_bought' }, { 'type': 'uint256', 'name': 'min_eth_bought' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }, { 'type': 'address', 'name': 'exchange_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 49532 }, { 'name': 'tokenToExchangeSwapOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'max_tokens_sold' }, { 'type': 'uint256', 'name': 'max_eth_sold' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'exchange_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 53233 }, { 'name': 'tokenToExchangeTransferOutput', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }, { 'type': 'uint256', 'name': 'max_tokens_sold' }, { 'type': 'uint256', 'name': 'max_eth_sold' }, { 'type': 'uint256', 'name': 'deadline' }, { 'type': 'address', 'name': 'recipient' }, { 'type': 'address', 'name': 'exchange_addr' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 53423 }, { 'name': 'getEthToTokenInputPrice', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'eth_sold' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 5542 }, { 'name': 'getEthToTokenOutputPrice', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_bought' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 6872 }, { 'name': 'getTokenToEthInputPrice', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'tokens_sold' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 5637 }, { 'name': 'getTokenToEthOutputPrice', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'uint256', 'name': 'eth_bought' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 6897 }, { 'name': 'tokenAddress', 'outputs': [{ 'type': 'address', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1413 }, { 'name': 'factoryAddress', 'outputs': [{ 'type': 'address', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1443 }, { 'name': 'balanceOf', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'address', 'name': '_owner' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1645 }, { 'name': 'transfer', 'outputs': [{ 'type': 'bool', 'name': 'out' }], 'inputs': [{ 'type': 'address', 'name': '_to' }, { 'type': 'uint256', 'name': '_value' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 75034 }, { 'name': 'transferFrom', 'outputs': [{ 'type': 'bool', 'name': 'out' }], 'inputs': [{ 'type': 'address', 'name': '_from' }, { 'type': 'address', 'name': '_to' }, { 'type': 'uint256', 'name': '_value' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 110907 }, { 'name': 'approve', 'outputs': [{ 'type': 'bool', 'name': 'out' }], 'inputs': [{ 'type': 'address', 'name': '_spender' }, { 'type': 'uint256', 'name': '_value' }], 'constant': false, 'payable': false, 'type': 'function', 'gas': 38769 }, { 'name': 'allowance', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [{ 'type': 'address', 'name': '_owner' }, { 'type': 'address', 'name': '_spender' }], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1925 }, { 'name': 'name', 'outputs': [{ 'type': 'bytes32', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1623 }, { 'name': 'symbol', 'outputs': [{ 'type': 'bytes32', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1653 }, { 'name': 'decimals', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1683 }, { 'name': 'totalSupply', 'outputs': [{ 'type': 'uint256', 'name': 'out' }], 'inputs': [], 'constant': true, 'payable': false, 'type': 'function', 'gas': 1713 }
    ]
  }
};

module.exports.oracleFactory = {
  address: '0x33735d0b15534b58f5e55ef574498ebb66a8bf43',
  contractName: 'OracleFactory',
  abi: [{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"newOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"string"}],"name":"symbolToOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_rate","type":"uint256"}],"name":"provide","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pauser","type":"address"},{"name":"_enabled","type":"bool"}],"name":"setPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canPause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes32[]"}],"name":"provideMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_signer","type":"address"}],"name":"removeSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_upgrade","type":"address"}],"name":"setUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"oracleToSymbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_signer","type":"address"},{"name":"_name","type":"string"}],"name":"addSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"},{"name":"_signer","type":"address"},{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_symbol","type":"string"},{"indexed":false,"name":"_oracle","type":"address"}],"name":"NewOracle","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[],"name":"Started","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_pauser","type":"address"},{"indexed":false,"name":"_enabled","type":"bool"}],"name":"CanPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
};

module.exports.oracle = {
  contractName: 'MultiSourceOracle',
  abi: [{ "constant": false, "inputs": [{ "name": "_signer", "type": "address" }], "name": "removeSigner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "pausedProvider", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_name", "type": "string" }], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_rate", "type": "uint256" }], "name": "provide", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_signer", "type": "address" }, { "name": "_name", "type": "string" }], "name": "addSigner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "string" }], "name": "signerWithName", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isSigner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgrade", "type": "address" }], "name": "setUpgrade", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes" }], "name": "readSample", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "nameOfSigner", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_addr", "type": "address" }], "name": "getProvided", "outputs": [{ "name": "_topHeap", "type": "bool" }, { "name": "_botHeap", "type": "bool" }, { "name": "_rate", "type": "uint256" }, { "name": "_indexHeap", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "upgrade", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "BASE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "readSample", "outputs": [{ "name": "_tokens", "type": "uint256" }, { "name": "_equivalent", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_prev", "type": "address" }, { "indexed": false, "name": "_new", "type": "address" }], "name": "Upgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_signer", "type": "address" }, { "indexed": false, "name": "_name", "type": "string" }], "name": "AddSigner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_signer", "type": "address" }, { "indexed": false, "name": "_oldName", "type": "string" }, { "indexed": false, "name": "_newName", "type": "string" }], "name": "UpdateName", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_signer", "type": "address" }, { "indexed": false, "name": "_name", "type": "string" }], "name": "RemoveSigner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }]
};