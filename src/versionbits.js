module.exports = {
  confirmationWindow: 2016,
  activationThreshold: 1916,
  startHeight: 409248,
  deployments: [
    {
      bit: 0,
      id: 'csv',
      name: 'CHECKSEQUENCEVERIFY',
      start: 1456790400, // May 1st, 2016
      timeout: 1493596800 // May 1st, 2017
    }, {
      bit: 1,
      id: 'segwit',
      name: 'Segregated Witness',
      start: 0, // November 15th, 2016
      timeout: 0 // November 15th, 2017
    }
  ]
}
