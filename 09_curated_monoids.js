const {Right, Left} = require("./Either")
const {Sum} = require("./Semigroups")
const {fromNullable} = require("./utils")
const {List} = require("immutable-ext")

const stats = List.of({page: "Home", views: 40},
                      {page: "About", views: 10},
                      {page: "Blog", views: 4})

const viewSum = stats.foldMap(x =>
    fromNullable(x.views).map(Sum), Right(Sum(0)))
    .fold(err => err, 
          sum => sum)

console.log(viewSum)