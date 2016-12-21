const fs = require("fs")
const Task = require("data.task")
const futurize = require("futurize").futurize(Task)
const {List} = require("immutable-ext")

const readFile = futurize(fs.readFile)

const files = List(["Box.js", "config.json"])
// const res = files.map(fn => readFile(fn, "utf-8"))

//we want to turn [Task] into Task([])
//so instead we do this:

const res = files.traverse(Task.of, fn => readFile(fn, "utf-8"))

res.fork(console.error, console.log)