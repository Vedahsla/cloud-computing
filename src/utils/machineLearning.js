const axios = require('axios');

async function getOptimalRoute(routes) {
  const response = await axios.post(process.env.MACHINE_LEARNING_API_URL, routes);
  return response.data;
}

module.exports = { getOptimalRoute };