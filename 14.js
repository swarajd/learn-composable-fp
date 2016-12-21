const Box = require("./Box")
const Task = require("data.task")
const Either = require("./Either")
const {Right, Left, fromNullable} = Either
const {List, Map} = require("immutable-ext")

//fx.map(f).map(g) === fx.map(x => f(g(x)))
//res1 === res2
// const res1 = Box("squirrels")
//             .map(s => s.substr(5))
//             .map(s => s.toUpperCase())

// const res2 = Box("squirrels")
//             .map(s => s.substr(5).toUpperCase())



//fx.map(id) === id(fx)
//res1 === res2
const id = x => x
const res1 = List.of("crayons").map(id)
const res2 = id(List.of("crayons"))

console.log(res1, res2)