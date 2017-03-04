var c = module.exports = require('./config')

c.assets = [
  "BTC",
  "LTC",
  "ETH",
  "ETC",
  "BFX",
  "RRT",
  "ZEC",
  "DSH"
]
c.currencies = [
  "USD",
  "BTC"
]

// default selector for indicators, etc
c.default_selector = "bitfinex.BTC-USD"