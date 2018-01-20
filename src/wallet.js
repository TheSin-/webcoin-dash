module.exports = {
  messagePrefix: '\x18DarkCoin Signed Message:\n',
  bip32: {
    public: 0x02fe52f8,
    private: 0x02fe52cc
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
  dustThreshold: 5460 // https://github.com/TheSin-/bitcore-lib-terracoin/blob/master/lib/transaction/transaction.js#L66
}
