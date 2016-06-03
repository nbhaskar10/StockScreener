/**
 * Parse the stocks from a CSV file and return an array of objects
 *
 * @example
 * [
 *   {
 *     symbol: 'APPL',
 *     name: 'Apple Computers',
 *     lastSale: '',
 *     marketCap: '$700B',
 *     sector: 'Electronics'
 *     ...
 *   },
 *   ...
 * ]
 *
 * @param  {array} csvFilePaths
 * @return {array}
 */

/* this should be able to return all of the tickers from NASDAQ.csv 
in the fomat [ { Symbol: 'Symbol' }, { Symbol: 'TFSC' }, etc
*/

function Parser(csvFilePaths) {
	const csv = require('csv-to-array')
	let columns = ["Ticker"]
	let arr=[];
	csv({
	 file: csvFilePaths[0],
	 columns: columns
	}, (error, results) => {
	 if (error) console.log(error);
	 console.log(results);
	})


}

module.exports = Parser;
