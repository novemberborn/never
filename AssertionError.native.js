// Enable use in React Native by shimming the Node.js AssertionError.

class AssertionError extends Error {
  constructor ({ message }) {
    super(message)
    this.name = 'AssertionError'
  }
}

module.exports = AssertionError
