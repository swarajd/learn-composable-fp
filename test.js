const Task = require("data.task")

const test = new Task((rej, res) =>
            setTimeout(() => 
                res({id: 1, title: `Project ${1}`}), 100))

let res = Task.of(p => `title: ${p.title}`)
// .ap(test)
debugger;
res
.fork(e => e, console.log)