![zenbot logo](https://rawgit.com/carlos8f/zenbot/master/assets/zenbot_3_logo.png)

[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/carlos8f/zenbot/master?t=moon)

> “To follow the path, look to the master, follow the master, walk with the master, see through the master, become the master.”
> – Zen Proverb

- New to Zenbot? Watch the slideshow: [Introducing Zenbot 3](https://gitpitch.com/carlos8f/zenbot/master?t=moon)
- Want to contribute to Zenbot? Read the [contributions guide](https://github.com/carlos8f/zenbot/blob/master/CONTRIBUTING.md)

## Current State of Development

I'm forking it to trade on Bitfinex.
* Backtesting is working
* Network IP is provided for easier remote viewing
* Trading is broken (trying to fix it)
* ...heavily testing

Known issues:
* occasionaly getting 'cannot read property 'map' of undefined' error in recorder.js and exiting with code 1.

## Quick-start

### 1. Requirements: [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/download-center)

### 2. Install zenbot 3 (Fedora 25):

```
sudo dnf install nodejs nodejs-devel mongodb-org mongodb-org-server npm
git clone https://github.com/nedievas/zenbot
cd zenbot
npm install
# optional, installs the `zenbot` binary in /usr/local/bin:
npm link
```

### 3. Copy `config_sample.js` to `config.js` and edit with API keys, database credentials, trade logic, etc.

Note: add your Bitfinex key to `config.js` to enable real trading.

### 4. Run zenbot (single-pair mode)

The following command will run all Zenbot functionality, using the default BTC/USD pair.

```
./run.sh
```

Here's how to run a different pair (example: ETH-BTC):

```
./zenbot launch map --backfill reduce run server --config config_eth_btc.js
```

### 4. Run zenbot (multi-pair mode)

The following will run multiple currency pairs along with the reducer and server in separate processes.

Required: reducer (for processing trade data):

```
./reducer.sh
```

Optional: server (for candlestick graphs and aggregated log):

```
./server.sh
```

Required: one or more run scripts (watches trades of a given pair and performs trade actions on the exchange or simulation)

```
./run-btc-usd.sh
```

And/or to trade ETH,

```
./run-eth-usd.sh
```

And/or to trade ETH/BTC,

```
./run-eth-btc.sh
```

### 5. If running server, open the live graph URL provided in the console.

To access the CLI,

```
./zenbot

  Usage: ./zenbot [options] [command]

  Commands:

    server [options]            launch the server
    launch [options] [cmds...]  launch multiple commands
    map [options]               map
    reduce [options]            reduce
    run                         run
    sim [options]               sim

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    --config <path>  specify a path for config.js overrides
```

The `./run.sh` script combines `launch map --backfill reduce run server`, so use the CLI to access the other commands.

### 6. Simulation

Once backfill has finished (should collect about 84 days of data), run a simulation:

```
./zenbot sim [--verbose]
```

Zenbot will return you a list of virtual trades, and an ROI figure. Open the URL provided in the console (while running the server) to see the virtual trades plotted on a candlestick graph. Tweak `default_logic.js` for new trade strategies and check your results this way.

Example simulation result: https://gist.github.com/carlos8f/afcc18ba0e1f422b1f3b1f67a3b05c8e

#### About the default trade logic in `bitfinex_logic.js`

- uses [Bitfinex](https://www.bitfinex.com/) API
- acts at 5 minute increments (ticks), but you can configure to act quicker or slower.
- computes the latest 14-hour [RSI](http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:relative_strength_index_rsi) at each 5m tick
- considers `RSI >= 70` an upwards trend and `RSI <= 30` a downwards trend
- Buys at the beginning of upwards trend, sells at the beginning of downwards trend
- trades 98% of current balance, market price
- Holds for min. 4 hours after a trade

You can tweak the JS from there. After tweaking `bitfinex_logic.js`, Use `./zenbot sim [--verbose]` to check your strategy against historical trades.

Note that simulations always end on Wednesday 5pm PST, and run for a max 84 days (12 weeks), to ensure input consistency.

### 7. Docker

Install Docker, Docker Compose, Docker Machine (if necessary) You can follow instructions at https://docs.docker.com/compose/install/

After installation

```
git clone https://github.com/carlos8f/zenbot.git
cd zenbot
docker-compose build
docker-compose up (-d if you don't want to see the log)
```

### 8. Web console

When the server is running, and you have visited the `?secret` URL provided in the console, you can access an aggregated, live feed of log messages at `http://localhost:3013/logs`. Example:

![screenshot](https://raw.githubusercontent.com/carlos8f/zenbot/master/assets/zenbot_web_logs.png)

## Donate

P.S., some have asked for how to donate to Zenbot development. I accept donations at **my Bitcoin address** Here:

### nedievas BTC

`1D3FaNGHtJBbMnDmhMuTUkyorqgt8HqNqg`

### carlos8f's BTC (the main developer)

`187rmNSkSvehgcKpBunre6a5wA5hQQop6W`

thanks!

- - -

### License: MIT

- Copyright (C) 2016 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2016 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
