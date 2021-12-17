import { forwardRef } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookDetails = (props) => {
  const { book, open, handleClose } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body1">{book.authors}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Pages: {book.numberOfPages}
          </Typography>
          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Released: {book.released}
          </Typography>
          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Publisher: {book.publisher}
          </Typography>
          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Country: {book.country}
          </Typography>
          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Media type: {book.mediaType}
          </Typography>

          <Typography variant="body2" style={{ color: '#222', padding: 10 }}>
            Number of Characters: {book.characters.length}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetails;
