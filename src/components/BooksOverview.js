import { Box } from '@mui/material';
import Book from './Book';

const BookOverview = (props) => {
  const { books } = props;

  const bookOverview = books.map((book) => {
    return <Book book={book} />;
  });
  return <Box sx={{ maxWidth: 600 }}>{bookOverview}</Box>;
};

export default BookOverview;
