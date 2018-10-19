const express = require('express')
const router = express.Router()
const knex = require('../knex')



// READ ALL records for this table
router.get('/', (req, res, next) => {

  knex('movies')
    .then((records) => {
      res.send(records)
    })
    .catch((err) => {
      next(err)
    })

})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {

  knex('movies')
    .where('id', req.params.id)
    .then((records) => {
      res.send(records)
    })
    .catch((err) => {
      next(err)
    })
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  let newRecord = {
    Title: req.body.title,
    Director: req.body.director,
    Year: req.body.year,
    myRating: req.body.rating,
    poster: req.body.poster
  }
  knex('movies')
    .insert(newRecord)
    .returning('*')
    .then((insertedRecord) => {
      res.send(insertedRecord)
    })
    .catch((err) => {
      next(err)
    })
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {

  knex('movies')
  .where('id', req.params.id)
  .then ((results) => {
    if(results.length>0) {
      let myRecord = results[0]
      if(req.body.title) { myRecord.title = req.body.title}
    }
  })
res.send('UPDATED RECORD')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
res.send('DELETED RECORD')
})
module.exports = router
