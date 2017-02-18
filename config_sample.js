var c = module.exports = require('./config_defaults')()

// mongo stuff
c.mongo_url = "mongodb://" + (process.env.MONGODB_PORT_27017_TCP_ADDR || "localhost") + ":27017/zenbrain" // change if your mongo server isn't local

c.mongo_username = null // normally not needed
c.mongo_password = null

//Bitfinex trading
c.bitfinex_key = ''
c.bitfinex_secret = ''

c.trade_log = true // log new trades as they come in.

// watch these exchanges
c.watch_exchanges = [
  "bitfinex",
  //"gdax", //do you need to watch others?
  //"kraken",
  //"poloniex"
]

// selector for indicators, trading, etc
c.default_selector = "bitfinex.BTCUSD"

// add selectors in the format "{exchange-slug}.{asset}-{currency}" to graph them
c.graph_selectors = [
  c.default_selector,
//  "bitfinex.ETHBTC",
// "bitfinex.ETHUSD",
//  "bitfinex.ETCBTC",
// "bitfinex.ETCUSD",
//  "bitfinex.BFXBTC",
// "bitfinex.BFXUSD",
//  "bitfinex.ZECBTC",
// "bitfinex.ZECUSD"
//  "bitfinex.XMRBTC",
// "bitfinex.XMRUSD",
//  "bitfinex.RRTBTC",
// "bitfinex.RRTUSD"
//  "bitfinex.LTCBTC",
// "bitfinex.LTCUSD"
]

// trade logic
c.logic = require('./bitfinex_logic')
