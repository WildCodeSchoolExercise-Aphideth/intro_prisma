const categoriesRouter = require('express').Router();

categoriesRouter.get('/', (req, res) => {
  res.json({ message: 'get all categories' })
});

categoriesRouter.get('/:slug', (req, res) => {
  res.json({ message: `get ${req.params.slug} category` })
});

module.exports = categoriesRouter;
