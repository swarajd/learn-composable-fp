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

/**
 * First is NOT a monoid
 */
const First = x =>
({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
})

module.exports = {Sum, All, First};