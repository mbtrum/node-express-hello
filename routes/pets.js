import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json( { "message" : "pets route" } );
});

// CRUD operations

// Get a pet by id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  // to-do: get pet by id from database

  // Return pet
  res.json( { "message" : "get pet by id" } );
});

// Get all pets

// add a new pet

// update pet by id

// delete pet by id






export default router;