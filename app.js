const express = require('express');

const articlesRouter = require('./routes/articles');
const categoriesRouter = require('./routes/categories');
const defaultRouter = require('./routes/default');

require('dotenv').config();

const app = express();

app.use('/', defaultRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/categories', categoriesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`)
});
