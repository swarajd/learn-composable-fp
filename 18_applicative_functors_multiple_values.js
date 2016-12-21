const Box = require("./Box")
const add = x => y => x + y

// const res = Box(add)
//     .ap(Box(2)) //Box(y => 2 + y)
//     .ap(Box(3)) //Box(5)


// F(x).map(f) === F(f).ap(F(x))

//WE DON'T KNOW WHAT F IS
// const liftA2 = (f, fx, fy) =>
//     F(f).ap(fx).ap(fy)

const liftA2 = (f, fx, fy) =>
    fx.map(f).ap(fy)

const res = liftA2(add, Box(2), Box(4))

console.log(res)