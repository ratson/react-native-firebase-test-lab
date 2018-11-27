'use strict'

const { isTestDevice } = require('esm')(module)('./index.js')

test('return false when not running of Firebase', () => {
  expect(isTestDevice()).resolves.toBe(false)
})
