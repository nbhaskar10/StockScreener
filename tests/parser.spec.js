const assert       = require('assert')
const Parser       = require('../src/Parser')
const Risk         = require('../src/RiskCalculator')
const Favorability = require('../src/FavorabilityCalculator')

const parsedCsvFiles = Parser([
  '../csv/NASDAQ.csv',
  '../csv/NYSE.csv'
])

// Assert types
assert.equals(Array.isArray(parsedCsvFiles), true)
assert.equals(typeof parsedCsvFiles[0] === 'object', true)

// Assert has properties
const stock = parsedCsvFiles[0]
const requiredProperties = ['symbol', 'name', 'lastSale', 'marketCap', 'sector']

for (const property of requiredProperties) {
  assert.equals(typeof stock[property] === 'string', true)
}
