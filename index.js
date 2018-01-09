const rp = require('request-promise')

module.exports = async (url, token, orgId = false) => {
  if (!url) {
    throw Error('Missing required input: url')
  }
  if (!token) {
    throw Error('Missing required input: token')
  }

  let headers = {
    Authorization: `Bearer ${token}`
  }

  if (orgId !== false) {
    headers['x-org-id'] = orgId
  }

  const httpOpts = {
    method: 'GET',
    uri: url,
    headers: headers
  }
  try {
    const data = await rp(httpOpts)
    const jsonData = JSON.parse(data)
    const entries = jsonData && jsonData._embedded && jsonData._embedded._entries ? jsonData._embedded._entries : []
    return entries
  } catch (error) {
    throw error
  }
}
