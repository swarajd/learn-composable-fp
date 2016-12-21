const {Right, Left, fromNullable} = require('./Either')

// const result = Right(2)
//     .map(x => x + 1)
//     .map(x => x / 2)
//     .fold(x => 'error',
//           x => x)

const fs = require('fs')

const tryCatch = f => {
    try {
        return Right(f())
    } catch(e) {
        return Left(e)
    }
}

// const getPort = () => {
//     try {
//         const str = fs.readFileSync('config.json')
//         const config = JSON.parse(str)
//         return config.port
//     } catch (err) {
//         return 3000
//     }
// }

const getPort = () =>
    tryCatch(() => fs.readFileSync('config.json')) //Right('')
    .chain(str => tryCatch(() => JSON.parse(str))) //Right(Left(e)) or Right(Right(''))
    .fold(e => 3000, 
          conf => conf.port)

let result = getPort()

console.log(result)