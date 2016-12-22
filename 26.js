const Box = require("./Box")
const Task = require("data.task")
const Either = require("./Either")
const {Right, Left, fromNullable} = Either
const {List, Map} = require("immutable-ext")

/**
 * Isomorphism: two functions to & from, such that
 * to(from(x)) === x
 * from(to(y)) === y
 * 
 * ex: String ~ [Char]
 */

const Iso = (to, from) => 
({
    to,
    from
})

const chars = Iso(s => s.split(""), c => c.join(""))

const truncate = str => 
    chars.from(chars.to(str).slice(0,3)).concat("...")

const res = truncate("hello world")

console.log(res)

/**
 * Another Isomorphism
 * 
 * [a] ~ Either null a
 */
const singleton = Iso(e => e.fold(() => [], x => [x]),
                        ([x]) => x ? Right(x) : Left())

const filterEither = (e, pred) =>
    singleton.from(singleton.to(e).filter(pred))

const filtered = filterEither(Right('ello'), x => x.match(/h/ig))
.map(x => x.toUpperCase())

console.log(filtered)