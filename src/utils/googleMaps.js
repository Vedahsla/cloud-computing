const googleMapsAPI = require('@googlemaps/google-maps-services-js');

const client = new googleMapsAPI.Client({
  key: process.env.GOOGLE_MAPS_API_KEY,
});

async function getRoutes(origin, destinations) {
  const response = await client.directions({
    origin,
    destination: destinations,
    mode: 'driving',
    unitSystem: 'etric',
  });
  return response.json.routes;
}

module.exports = { getRoutes };