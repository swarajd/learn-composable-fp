//const Either = Right || Left

const Right = x => 
({
    map: f => Right(f(x)),
    chain: f => f(x),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
})

const Left = x => 
({
    map: f => Left(x),
    chain: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
})

module.exports = {Right, Left}