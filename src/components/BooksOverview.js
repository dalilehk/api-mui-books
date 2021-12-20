import { Box } from '@mui/material';
import Book from './Book';
import FilterPublicationDate from './FilterPublicationDate';

const BookOverview = (props) => {
  const { books } = props;

  return (
    <Box maxWidth="sm" sx={{ minWidth: 250 }}>
      <FilterPublicationDate books={books} />
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </Box>
  );
};

export default BookOverview;
