//const Either = Right || Left

const Right = x => 
({
    ap: r => r.map(x),
    map: f => Right(f(x)),
    chain: f => f(x),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`,
    concat: o => 
        o.fold(e => Left(e),
               r => Right(x.concat(r)))
})

const Left = x => 
({
    ap: r => Left(x),
    map: f => Left(x),
    chain: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`,
    concat: o => Left(x)
})

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

module.exports = {
    Right, 
    Left, 
    fromNullable,
    of: Right
}