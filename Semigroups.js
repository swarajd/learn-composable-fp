const Sum = x =>
({
    x,
    concat: ({x: y}) => 
        Sum(x + y),
    inspect: () => `Sum(${x})`
})

Sum.empty = () => Sum(0)

const All = x =>
({
    x,
    concat: ({x: y}) =>
        All(x && y),
    inspect: () => `All(${x})`
})

All.empty = () => All(true)

const Pair = (x, y) =>
({
    x,
    y,
    concat: ({x: x1, y: y1}) =>
        Pair(x.concat(x1), y.concat(y1)),
    toList: () => [x, y],
    bimap: (f, g) => Pair(f(x), g(y))
})

/**
 * First is NOT a monoid
 */
const First = x =>
({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
})

module.exports = {Sum, All, Pair, First};