var params = require('webcoin-params-terracoin')

module.exports = params({
  blockchain: require('./lib/blockchain.js'),
  net: require('./lib/net.js'),
  wallet: require('./lib/wallet.js'),
  versionbits: require('./lib/versionbits.js')
})
