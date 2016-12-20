const {Right, Left} = require('./Either')

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const fs = require('fs')

const tryCatch = f => {
    try {
        return Right(f())
    } catch(e) {
        console.log(e);
        return Left(e)
    }
}

const readFile = x => tryCatch(() => fs.readFileSync(x, "utf-8"))

const wrapExample = example =>
    fromNullable(example.previewPath)
    .chain(readFile)
    .fold(() => example,
          p => Object.assign({preview: p}, example))

let exmp = {
    previewPath: "./preview.txt"
}

debugger;
let result = wrapExample(exmp);

console.log(result);    
