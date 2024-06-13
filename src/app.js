const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const reviewsRouter = require('./routes/reviews');
const routesRouter = require('./routes/routes');

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/routes', routesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
