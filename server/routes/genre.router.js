const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
    // Add query to get all genres
    console.log('in GET / all genres');
    const queryText = `SELECT * FROM "genres";`
    pool.query(queryText)
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR in genre GET / all genres', error);
        res.sendStatus(500);
      });
  });
  
  router.get('/:id', (req, res) => {
    console.log('in genre GET /:id');
    const id = req.params.id;
    const queryText =   `SELECT "genres"."name" FROM "genres"
                        JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
                        JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
                        WHERE "movies"."id" = $1;`
    pool.query(queryText, [id])
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR GET genres by movie id', error);
        res.sendStatus(500);
      });
  });

module.exports = router;