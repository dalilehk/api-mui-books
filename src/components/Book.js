import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import BookDetails from './BookDetails';

const Book = (props) => {
  const { book } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card variant="outlined" sx={{ bgcolor: '#DCDCDC', mt: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {book.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            See more details
          </Button>
        </CardActions>
      </Card>
      <BookDetails open={open} handleClose={handleClose} book={book} />
    </>
  );
};

export default Book;
