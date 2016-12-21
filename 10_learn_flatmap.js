const { Map, List } = require("immutable-ext")
const { Sum } = require("./Semigroups")

// const res = List.of(Sum(1), Sum(2), Sum(3))
//             .fold(Sum.empty()) //Sum(6)
//             //.reduce((acc, x) => acc.concat(x), Sum.empty())

// const res = List.of(1,2,3)
//             .map(Sum)
//             .fold(Sum.empty())

const res = List.of(1,2,3)
            .foldMap(Sum, Sum.empty())
            //.reduce((acc, x) => acc.concat(x), Sum.empty())

console.log(res);