import {expectType} from 'tsd'
import never = require('.')

function getValue (): string | undefined {
  return ''
}

expectType<string | undefined>(getValue())

const value = getValue() ?? never()
expectType<string>(value)
