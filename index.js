const axios = require('axios')

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
    url,
    headers: orgId ? { 'x-org-id': orgId } : undefined
  }
  try {
    const { data } = await axios(httpOpts)
    const entries = data && data._embedded && data._embedded._entries ? data._embedded._entries : data
    return entries
  } catch (error) {
    throw error
  }
}
