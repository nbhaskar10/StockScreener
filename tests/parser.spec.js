const assert       = require('assert')
const Parser       = require('../src/Parser')
const Risk         = require('../src/RiskCalculator')
const Favorability = require('../src/FavorabilityCalculator')


Parser([
  './csv/NASDAQ.csv',
  './csv/NYSE.csv'
], (parsedCsvFiles) => {
  // Assert types
  assert.equal(Array.isArray(parsedCsvFiles), true)
  assert.equal(typeof parsedCsvFiles[0] === 'object', true)

  // Assert has properties
  const stock = parsedCsvFiles[0]
  const requiredProperties = ['Symbol', 'Name', 'LastSale', 'MarketCap', 'Sector']

  for (const property of requiredProperties) {
    console.log(property, stock[property]);
    assert.equal(
      typeof stock[property] === 'string' ||
      typeof stock[property] === 'number', true
    )
  }
})
