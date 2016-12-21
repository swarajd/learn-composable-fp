const add = x => (y => x + y)

const inc = add(1) // (y => y + 1)

const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

const filter = pred => xs => xs.filter(pred)

const getAllOdds = filter(isOdd)

const replace = regex => repl => str =>
    str.replace(regex, repl)

const censor = replace(/[aeiou]/g)("*")

const map = f => xs => xs.map(f)

const censorAll = map(censor)

// const res = isOdd(2) //0
// const res = getAllOdds([1,2,3,4]) //[ 1, 3 ]
// const res = censor("hello world") // h*ll* w*rld
const res = censorAll(["hello", "world"]) //[ 'h*ll*', 'w*rld' ]

console.log(res)