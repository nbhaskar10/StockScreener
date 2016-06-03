const Nightmare = require('nightmare')
const nightmare = new Nightmare({ show: true })


function Crawler() {

}

/**
 * Initiate crawling of yahoo
 *
 * @param  {number} limit
 * @return {array}
 */
function getStockSymbols() {
    nightmare.goto('')
}

/**
 * Filter stocks from the
 *
 * @param {array} stocksToFilter | The array of stocks that should be filtered
 *                               | from the returned response
 */
function filterUnique(stocksToFilter) {

}

/**
 * Return a list of stock symbols gathered from yahoo
 *
 */
function crawl() {

}

module.exports = { crawl, filterUnique, getStockSymbols }
