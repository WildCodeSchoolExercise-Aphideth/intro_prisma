const defaultRouter = require('express').Router();
const path = require('path');

defaultRouter.get('/', (req, res) => {
  res.redirect('/api')
});

defaultRouter.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname+'/../templates/index.html'));
});

module.exports = defaultRouter;
