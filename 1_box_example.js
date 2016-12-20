const Box = require('./Box');

const nextCharForNumberString = str => 
    Box(str)
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())

const result = nextCharForNumberString(`64`);

console.log(result);