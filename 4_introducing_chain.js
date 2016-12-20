const {Right, Left} = require('./Either')

// const result = Right(2)
//     .map(x => x + 1)
//     .map(x => x / 2)
//     .fold(x => 'error',
//           x => x)

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const fs = require('fs')

const getPort = () => {
    try {
        const str = fs.readFileSync('config.json')
        const config = JSON.parse(str)
        return config.port
    } catch (err) {
        return 3000
    }
}

console.log(result)