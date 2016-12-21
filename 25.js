/**
 * natural transformation
 * Array -> List
 */
const {List} = require("immutable-ext")

const res = List(["hello", "world"])
.chain(x => List(x.split('')))

console.log(res)

/**
 * natural transformation
 * Array -> Integer
 */
const {Right, Left, fromNullable} = require("./Either")
const first = xs =>
    fromNullable(xs[0])

const largeNumbers = xs =>
    xs.filter(x => x > 100)

const larger = x => 
    x * 2

//nt(x).map(f) === nt(x.map(f))

const app = xs =>
    first(largeNumbers(xs)).map(larger)

console.log(app([2, 400, 5, 1000]))

/**
 * natural transformation
 * 
 */
const Box = require("./Box")
const Task = require("data.task")

const fake = id =>
    ({id, name: "user1", best_friend_id: id + 1})

const Db = ({
    find: id =>
        new Task((rej, res) => 
            res(id > 2 ? Right(fake(id)) : Left('not found')))
})

const eitherToTask = e =>
    e.fold(Task.rejected, Task.of)


// this is hella wack
// Db.find(3) //Task(Right(user))
// .chain(either => 
//     either.map(user => Db.find(user.best_friend_id))) //Right(Task(Right(User)))

// this is better
const query = Db.find(3) //Task(Right(user))
.chain(eitherToTask)
.chain(user => 
    Db.find(user.best_friend_id))
.chain(eitherToTask)

query.fork(console.error, console.log)