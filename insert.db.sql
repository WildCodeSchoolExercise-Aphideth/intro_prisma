DELETE FROM `Article`;
DELETE FROM `Category`;

INSERT INTO `Category` VALUES
  (1, 'My Life', 'my-life'),
  (2, 'Tech', 'tech'),
  (3, 'Random', 'random')
;

INSERT INTO `Article` VALUES
  (1, 'My First Article', 'my-first-article', 'Article 1 content', '2021-02-10 12:23:00', 1),
  (2, 'My Second Article', 'my-second-article', 'Article 2 content', '2021-03-23 15:54:00', 1),
  (3, 'Another Article', 'another-article', 'Article 3 content', '2021-12-01 08:02:00', 2),
  (4, 'Bla Bli Coucou', 'bla-bli-coucou', 'Article 4 content', '2022-01-01 17:16:00', 3)
;
