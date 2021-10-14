const desafio01 = require('./desafio01');
const desafio02 = require('./desafio02');
const desafio03 = require('./desafio03');

const fs = require('fs');

const getDataFromJSON = (fileName) => {
  const rawdata = fs.readFileSync(`data/${fileName}.json`);
  return JSON.parse(rawdata);
} 

console.log('Resultados');
console.log('- Desafio 1: ');
console.log(desafio01(getDataFromJSON('Pets')));
console.log('- Desafio 2: ');
console.log(desafio02(getDataFromJSON('Pets')));
console.log('- Desafio 3: ');
console.log(desafio03(getDataFromJSON('Pets')));