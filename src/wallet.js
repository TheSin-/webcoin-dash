module.exports = {
  messagePrefix: '\x18DarkCoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
  dustThreshold: 5460 // https://github.com/terracoin/bitcore-lib-terracoin/blob/master/lib/transaction/transaction.js#L66
}
