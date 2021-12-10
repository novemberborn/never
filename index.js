'use strict'
const AssertionError = require('./AssertionError')

function never (message = 'Unexpected call to never()') {
  throw new AssertionError({ message, stackStartFn: never })
}

module.exports = never
