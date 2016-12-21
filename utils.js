const {Right, Left} = require('./Either');

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

module.exports = {fromNullable}