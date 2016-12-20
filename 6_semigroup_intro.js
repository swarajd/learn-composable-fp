/**
 * const res1 = [1,2].concat([3,4]).concat([5,6])
 * const res2 = [1,2].concat([3,4].concat([5,6]))
 * res1 === res2
 */

const {Sum, All, First} = require('./Semigroups');

// const res = Sum(1).concat(Sum(2)) //should be Sum(3)
// const res = All(true).concat(All(false)) //should be All(false)
const res = First("blah").concat(First("ice cream")) //should be First("blah")

console.log(res)