'use strict'
const { AssertionError } = require('assert')
const test = require('ava')
const never = require('.')
const ShimmedAssertionError = require('./AssertionError.native')

test('throws when called', t => {
  t.throws(never, { instanceOf: AssertionError })
})

test('errors have a default message', t => {
  const error = t.throws(never)
  t.snapshot(error.message)
})

test('error message can be customized', t => {
  const message = 'This is a custom message'
  t.throws(() => never('This is a custom message'), { message })
})

test('never() is not in the error stack', t => {
  const wrapper = () => never()
  const error = t.throws(wrapper)
  t.regex(error.stack.split('\n')[1], /wrapper/)
})

test('the shimmed AssertionError can be constructed', t => {
  const error = t.throws(() => {
    throw new ShimmedAssertionError({ message: 'Error message' })
  }, {
    instanceOf: ShimmedAssertionError,
    message: 'Error message'
  })
  t.is(error.name, 'AssertionError')
})
