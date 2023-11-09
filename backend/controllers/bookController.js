import { Book } from '../models/bookModels.js';

// Create Book
export const createBook = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.title ||
      !req.body.publishYear ||
      !req.body.description
    ) {
      return res.status(400).send({
        message:
          'Send all required fields: title, author, publishYear, description',
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      description: req.body.description,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Retrieve all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Retrieve single book
export const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Update Book
export const updateBook = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.title ||
      !req.body.publishYear ||
      !req.body.description
    ) {
      return res.status(400).send({
        message:
          'Send all required fields: title, author, publishYear, description',
      });
    }
    const id = req.params.id;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Book not Found' });
    }
    return res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete single book
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Book Deleted Successfully' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Book ID not found' });
  }
};
