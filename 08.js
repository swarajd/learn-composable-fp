const {Sum, All, First} = require('./Semigroups');

// const res = Sum.empty().concat(Sum(1).concat(Sum(2)))
// const res = All(false).concat(All(true)).concat(All.empty())

// console.log(res);

const sum = xs =>
    xs.reduce((acc, x) => acc + x, 0)

const all = xs =>
    xs.reduce((acc, x) => acc && x, true)

//will blow up on empty list
const first = xs =>
    xs.reduce((acc,x) => acc)