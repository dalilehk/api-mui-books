import { Box } from '@mui/material';
import Book from './Book';

const BookOverview = (props) => {
  const { books } = props;

  const bookOverview = books.map((book) => {
    return <Book title={book.title} />;
  });
  return <Box sx={{ maxWidth: 500 }}>{bookOverview}</Box>;
};

export default BookOverview;
