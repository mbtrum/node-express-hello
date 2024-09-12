import express from 'express';
import rootRouter from './routes/root.js';
import petsRouter from './routes/pets.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Web pages in my website
app.use('/', rootRouter);

// API routes in website
app.use('/api/pets', petsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
