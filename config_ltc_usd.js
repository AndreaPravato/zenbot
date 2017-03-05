var c = module.exports = require('./config')

c.assets = [
  "LTC"
]
c.currencies = [
  "USD",
  "BTC"
]

// default selector for indicators, etc
c.default_selector = "bitfinex.LTC-USD"