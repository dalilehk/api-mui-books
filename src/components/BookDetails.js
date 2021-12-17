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
      <DialogTitle sx={{ pr: 6, pl: 6, pt: 6 }}>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body1">{book.authors}</Typography>
      </DialogTitle>
      <DialogContent sx={{ pr: 6, pl: 6 }}>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Pages: {book.numberOfPages}
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Released: {book.released}
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Publisher: {book.publisher}
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Country: {book.country}
          </Typography>
          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Media type: {book.mediaType}
          </Typography>

          <Typography variant="body2" sx={{ color: '#222', pt: 2 }}>
            Number of Characters: {book.characters.length}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pr: 2, pb: 2 }}>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetails;
