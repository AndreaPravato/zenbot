var c = module.exports = require('./config')

c.assets = [
  "BFX"
]
c.currencies = [
  "USD",
  "BTC"
]

// default selector for indicators, etc
c.default_selector = "bitfinex.BFX-USD"