const test = require('ava')
const getToken = require('fint-token-generator')
const getData = require('../../index')
const apiUrl = 'https://play-with-fint.felleskomponent.no/administrasjon/personal/personalressurs'
const tokenOptions = {
  url: 'https://namidp01.rogfk.no/nidp/oauth/nam/token',
  credentials: {
    client: {
      client_id: '6e1cf7b4-b107-42b3-9435-8fda70726c6a',
      client_secret: '6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp-8RVux6318A'
    },
    auth: {
      username: 'pwfatut',
      password: 'pwfatut',
      grant_type: 'password'
    }
  }
}

test('it gets data', async t => {
  const token = await getToken(tokenOptions)
  const data = await getData(apiUrl, token)
  t.truthy(data, 'got data')
})
