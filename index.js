const Parser       = require('./src/Parser')
const Crawler      = require('./src/Crawler')
const Favorability = require('./src/FavorabilityCalculator')
const Risk         = require('./src/RiskCalculator')

// Predefined list of possible sectors
const sectors = []

const parsedCsvFiles = Parser([
  './csv/NASDAQ.csv',
  './csv/NYSE.csv'
])

// Parse cli input
// ...
