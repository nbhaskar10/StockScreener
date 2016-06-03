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

const Converter = require('csvtojson').Converter;
const converter = new Converter({});

/**
 * This should be able to return all of the tickers from NASDAQ.csv
 * in the fomat [ { Symbol: 'Symbol' }, { Symbol: 'TFSC' }, etc
 */
function Parser(csvFilePaths = [], callback) {
	// Pass a function to the `converter` to be called when done parsing
	converter.on('end_parsed', function (results) {
		// Now we have access to results, which cannot be used outside of this callback
		// A variable declared inside a function cannot be used outside of it
	  // console.log(results);

		if (callback) callback(results);
	});

	// Pass the converter as a callback to the filesystem, which will
	// 1. read the CSV file
	// 2. then invoke the callback which will parse it into CSV format
	require('fs')
		.createReadStream(csvFilePaths[0])
		.pipe(converter);
}

// Parser([args]); Invoke the Parser function. Above, we declared it

module.exports = Parser
