import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
