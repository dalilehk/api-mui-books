import { Box, Typography, CircularProgress } from '@mui/material';
import BooksOverview from '../components/BooksOverview';
import Header from '../components/Header';
import NotFound from '../pages/NotFound';

const Home = (props) => {
  const { books, count, error, isLoading } = props;

  // Handling messages
  let content = <Typography>No books found</Typography>;

  if (count > 0) {
    content = (
      <>
        <Header />
        <Typography align="center">
          The book series contains {count} volumes.
        </Typography>
        <BooksOverview books={books} />
      </>
    );
  }

  if (error) {
    content = (
      <NotFound />
      // <Typography variant="h3" textAlign="center" color="secondary">
      //   {error}
      // </Typography>
    );
  }

  if (isLoading) {
    content = (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return <>{content}</>;
};

export default Home;
