const {fromNullable} = require("./utils")

// const result = Right(2)
//     .map(x => x + 1)
//     .map(x => x / 2)
//     .fold(x => 'error',
//           x => x)


const findColor = name => 
    fromNullable(({red: "#ff4444", blue: "#3b5998", yellow: "#fff68f"})[name]);

const result = findColor('yellow')
    .map(c => c.slice(1))
    .fold(e => 'no color',
          c => c.toUpperCase())

console.log(result);