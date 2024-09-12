import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<html><head><title>My Website</title></head><body><h1>Home page</h1><p>Welcome to my website!</p></body></html>');
  // To-do: output nice home page.
});

router.get('/contacts', (req, res) => {
  res.send('Contacts');
});



export default router;


