const rp = require('request-promise')

module.exports = async (url, token, orgId) => {
  if (!url) {
    throw Error('Missing required input: url')
  }
  if (!token) {
    throw Error('Missing required input: token')
  }

  const httpOpts = {
    method: 'GET',
    uri: url,
    headers: {
      Authorization: `Bearer ${token}`,
      'x-org-id': orgId
    }
  }
  try {
    const data = await rp(httpOpts)
    const jsonData = JSON.parse(data)
    return jsonData._embedded._entries
  } catch (error) {
    console.error(error)
  }
}
