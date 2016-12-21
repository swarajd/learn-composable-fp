const Box = x => 
({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x)
})

Box.of = x => Box(x)

module.exports = Box;
