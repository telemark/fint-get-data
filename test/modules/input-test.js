const test = require('ava')
const getData = require('../../index')

test('throws if missing url', async t => {
  const error = await t.throws(getData())
  t.is(error.message, 'Missing required input: url')
})

test('throws if missing token', async t => {
  const url = 'https://url.com'
  const error = await t.throws(getData(url))
  t.is(error.message, 'Missing required input: token')
})
