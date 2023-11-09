import express from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from '../controllers/bookController.js';

const router = express.Router();

router.route('/').get(getAllBooks).post(createBook);
router.route('/:id').get(getSingleBook).put(updateBook).delete(deleteBook);

export default router;
