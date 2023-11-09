import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const BooksTable = ({ books }) => {
  return (
    <Table>
      <Table.Head className="bg-gray-300 rounded-lg">
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Author</Table.HeadCell>
        <Table.HeadCell>Publish Year</Table.HeadCell>
        <Table.HeadCell>Operations</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {books.map((book, index) => (
          <Table.Row
            key={book._id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="border border-slate-700 rounded-md text-center">
              {book.title}
            </Table.Cell>
            <Table.Cell className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </Table.Cell>
            <Table.Cell className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </Table.Cell>
            <Table.Cell className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-800" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-800" />
                </Link>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
export default BooksTable;
