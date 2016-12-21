const Either = require("./Either")
const {Right, Left, fromNullable} = Either
const Box = require("./Box")
const Task = require("data.task")

// Natural Transformation:
// F a -> G a
// definition: nt(x).map(f) === nt(x.map(f))

const first = xs =>
    fromNullable(xs[0])

const boxToEither = b =>
    b.fold(Right)

const eitherToTask = e =>
    e.fold(Task.rejected, Task.of)

// res1 === res2
const res1 = first([1,2,3]).map(x => x + 1)
const res2 = first([1,2,3].map(x => x + 1))
console.log(res1, res2)

// res1 === res2
// const res1 = boxToEither(Box(100)).map(x => x * 2)
// const res2 = boxToEither(Box(100).map(x => x * 2))
// console.log(res1, res2)

// eitherToTask(Right("nightingale"))
// .fork(e => console.error("err", e),
//       s => console.log("success", s))