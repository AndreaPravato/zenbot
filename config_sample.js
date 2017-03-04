var c = module.exports = require('./config_defaults')()

// mongo stuff
c.mongo_url = "mongodb://" + (process.env.MONGODB_PORT_27017_TCP_ADDR || "localhost") + ":27017/zenbrain" // change if your mongo server isn't local

c.mongo_username = null // normally not needed
c.mongo_password = null

//Bitfinex trading
c.bitfinex_key = ''
c.bitfinex_secret = ''
c.wallet = 'exchange' // 'trading' for margin trading

//TODO
/* add option to change RSI setting in config for separate pairs.*/

c.trade_log = true // log new trades as they come in.

// watch these exchanges
c.watch_exchanges = [
  "bitfinex"
]

// selector for indicators, trading, etc
c.default_selector = "bitfinex.BTC-USD"

// add selectors in the format "{exchange-slug}.{asset}-{currency}" to graph them
c.graph_selectors = [
  c.default_selector,
  "bitfinex.ETH-BTC",
  "bitfinex.ETH-USD",
  "bitfinex.ETC-BTC",
  "bitfinex.ETC-USD",
  "bitfinex.BFX-BTC",
  "bitfinex.BFX-USD",
  "bitfinex.ZEC-BTC",
  "bitfinex.ZEC-USD",
  "bitfinex.XMR-BTC",
  "bitfinex.XMR-USD",
  "bitfinex.RRT-BTC",
  "bitfinex.RRT-USD",
  "bitfinex.LTC-BTC",
  "bitfinex.LTC-USD",
  "bitfinex.DSH-USD",
  "bitfinex.DSH-BTC"
]

// trade logic
c.logic = require('./bitfinex_logic')
