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
    myRating: req.body.myRating,
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
router.patch('/:id', (req, res, next) => {

  knex('movies')
  .where('id', req.params.id)
  .then ((results) => {
    if(results.length>0) {
      let myRecord = results[0]
      if(req.body.title) { myRecord.title = req.body.title }
      if(req.body.director) { myRecord.director = req.body.director }
      if(req.body.year) { myRecord.year= req.body.year }
      if(req.body.rating) { myRecord.rating = req.body.rating }
      if(req.body.poster) { myRecord.poster = req.body.poster }
      knex('movies')
      .update(myRecord)
      .where('id', req.params.id)
      .returning('*')
      .then((updatedRecord) => {
        res.send(updatedRecord)
      })

    }else {
      throw new Error('Ya Dingus. NOT FoUnD.')
    }
  })
  .catch((err) => {
    next(err)
  })
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  knex('movies')
  .where('id', req.params.id)
  .then((foundRecords) => {
    if( foundRecords.length>0 ) {
      knex('movies').del()
      .where('id', req.params.id)
      .returning('*')
      .then((results) => {
        let deletedRecord = results[0]
        res.send(deletedRecord)
      })
    } else {
      throw new Error(`Cant delete what does not exist`)
    }
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
