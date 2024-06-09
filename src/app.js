const express = require('express');
const app = express();
const { authRouter, reviewsRouter, routesRouter } = require('./routes');

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/routes', routesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});