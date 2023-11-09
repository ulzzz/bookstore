import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//Routes
import bookRouter from './routes/bookRouter.js';

const app = express();
const port = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL;

// Middleware for parsing req body
app.use(express.json());

// Middleware CORS
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome');
});

app.use('/books', bookRouter);

// Connect to DB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to DB');
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
