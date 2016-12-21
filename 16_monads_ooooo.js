const Box = require("./Box")

//Box, Either, Task, List

//F.of, chain (flatMap, bind, >>=)

// httpGet("/user")
// .chain(user =>
//     httpGet(`/comments/${user.id}`)
//     .chain(comments =>
//         updateDOM(user, comments)))

const join = m =>
    m.chain(x => x)

// join(m.map(join)) === join(join(m))
// const m = Box(Box(Box(3)))
// const res1 = join(m.map(join))
// const res2 = join(join(m))

// join(Box.of(m)) === join(m.map(Box.of))
const m = Box("wonder")
const res1 = join(Box.of(m))
const res2 = join(m.map(Box.of))

console.log(res1, res2)
