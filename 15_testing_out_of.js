const Box = require("./Box")
const Either = require("./Either")
const Task = require("data.task")

const tsk = Task.of("hello")
console.log(tsk)

const eth = Either.of("hello")
console.log(eth)

const bx = Box.of(100)
console.log(bx)