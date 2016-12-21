const Box = x => 
({
    ap: b2 => b2.map(x),
    map: f => Box(f(x)),
    chain: f => f(x),
    inspect: () => `Box(${x})`,
    fold: f => f(x)
})

Box.of = x => Box(x)

module.exports = Box;
