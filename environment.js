const ropstenContracts = require('./ropstenContracts.js');

// For each signer haves an array of data
// Each data contains an array of
//    currency: The other part of the pair ETH/...
//    exchangeId: The echange who provide the rate, look in ./src/rate.js

const signersData = [
  {
    currency: 'ETH',
    exchangesIds: ['binance', 'uniswap', 'huobipro', 'hitbtc']
  },
  {
    currency: 'BTC',
    exchangesIds: ['binance', 'huobipro', 'bittrex', 'upbit', 'hitbtc']
  }
];

module.exports = {
  node: ropstenContracts.nodes.infura,
  RCN: ropstenContracts.RCNToken,
  oracleFactory: ropstenContracts.oracleFactory,
  oracle: ropstenContracts.oracle,
  signersData: signersData,
  markets: ropstenContracts.markets,
  wait: process.env.WAIT * 60 * 1000 // 15 min
};
