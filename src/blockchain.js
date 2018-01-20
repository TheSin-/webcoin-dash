// blockchain definition

var u = require('terracoin-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('0f8b09f93803b067580c16c3f3a6aaa901be06ad892cea9f02d8a4f93628f196'),
  time: 1351242683,
  bits: 0x1d00ffff,
  nonce: 2820375594
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 1087500,
    header: {
      version: 3,
      prevHash: u.toHash('c84183a1fab798fbc63a0da4b3e7a344b30ba46326622214f21e4f4e7aea377f'),
      merkleRoot: u.toHash('218b778f9202438dc20fa733e4da6eb3cc6ddc710c3de38d8fcbcf6d2cb2f2d9'),
      time: 1506940111,
      bits: 0x01152605,
      nonce: 0
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
