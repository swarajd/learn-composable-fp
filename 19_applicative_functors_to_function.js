const Either = require("./Either");

const liftA2 = (f, fx, fy) =>
    fx.map(f).ap(fy)

const $ = selector =>
    Either.of({selector, height: 10})

const getScreenSize = screen => head => foot =>
    screen - (head.height + foot.height)

//first finds header, than footer, which is wack
// $("header").chain(head =>
//     $("footer").chain(foot =>
//         getScreenSize(800, head, foot)))

// this works pretty well
// const res = Either.of(getScreenSize(800))
//             .ap($("header"))
//             .ap($("footer"))

// or we can do
const res = liftA2(getScreenSize(800), $("header"), $("footer"))


console.log(res)

