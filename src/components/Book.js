import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import BookDetails from './BookDetails';
// TODO: makeStyles doesn't work! neither from '@mui/material/styles' or '@mui/material/styles'
// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles({
//   card: {
//     backgroundColor: 'violet',
//     '&:hover': {
//       backgroundColor: 'yellow',
//     },
//   },
// });

const Book = (props) => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const { book } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    navigate('/books');
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          mt: 2,
          backgroundColor: '#f5f5f5',
          '&:hover': {
            backgroundColor: '#ede7f6',
          },
        }}
      >
        <CardContent>
          <Typography variant="h2">{book.title}</Typography>
          <Typography variant="subtitle1" color="#666">
            {book.authors}
          </Typography>
          <Typography variant="subtitle1" color="#666" gutterBottom>
            {book.publicationDate}
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 2, mb: 1 }}>
          {/* Link to dynamic path */}
          <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              onClick={handleClickOpen}
              variant="contained"
              color="secondary"
              align="center"
            >
              See more details
            </Button>
          </Link>
        </CardActions>
      </Card>

      {/* to reload only on open, not all in advance */}
      {isOpen && (
        <BookDetails open={isOpen} handleClose={handleClose} book={book} />
      )}
    </>
  );
};

export default Book;
