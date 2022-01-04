const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const articlesRouter = require('express').Router();

articlesRouter.get('/', async (req, res) => {
  const articles = await prisma.article.findMany({
    include: {
      category: true
    },
    where : {
      title : {
        contains: req.query.search
      }
    }
  });
  res.json(articles)
});

articlesRouter.get('/:slug', async (req, res) => {
  const article = await prisma.article.findUnique({
    where: {
      slug: req.params.slug
    }
  })
  res.json(article)
});

module.exports = articlesRouter
