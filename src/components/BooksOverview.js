import { Box } from '@mui/material';
import Book from './Book';

const BookOverview = (props) => {
  const { books } = props;

  const bookOverview = books.map((book) => {
    return <Book book={book} />;
  });
  return <Box sx={{ maxWidth: 500, minWidth: 400 }}>{bookOverview}</Box>;
};

export default BookOverview;
