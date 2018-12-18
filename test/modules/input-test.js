const test = require('ava')
const getData = require('../../index')

test('throws if missing url', async t => {
  try {
    await getData()
  } catch (error) {
    t.is(error.message, 'Missing required input: url')
  }
})

test('throws if missing token', async t => {
  const url = 'https://url.com'
  try {
    await getData(url)
  } catch (error) {
    t.is(error.message, 'Missing required input: token')
  }
})
