const googleMaps = require('../utils/googleMaps');
const machineLearning = require('../utils/machineLearning');

async function getOptimalRoute(req, res) {
  const { origin, destinations } = req.body;
 try {
    const routes = await googleMaps.getRoutes(origin, destinations);
    const optimalRoute = await machineLearning.getOptimalRoute(routes);
    res.status(200).send(optimalRoute);
  } catch (error) {
    res.status(400).send({ message: 'Error getting optimal route' });
  }
}

module.exports = { getOptimalRoute };