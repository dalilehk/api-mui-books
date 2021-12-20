import { Box, Typography, CircularProgress } from '@mui/material';
import BooksOverview from '../components/BooksOverview';
import Header from '../components/Header';
import NotFound from '../pages/NotFound';

const Home = (props) => {
  const { books, count, error, isLoading } = props;

  // Handling messages
  let content = <NotFound />;

  if (isLoading) {
    content = (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    content = <NotFound />;
  }

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

  return <>{content}</>;
};

export default Home;
