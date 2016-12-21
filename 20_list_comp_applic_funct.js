const {List} = require("immutable-ext")

const merch = () =>
    List.of(x => y => z => `${x}-${y}-${z}`)
    .ap(List(["large", "medium", "small"]))
    .ap(List(["blue", "red", "white"]))
    .ap(List(["teeshirt", "sweater", ]))

const res = merch()

console.log(res)