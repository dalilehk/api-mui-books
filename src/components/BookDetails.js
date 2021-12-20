import { forwardRef } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(detail, description) {
  return { detail, description };
}

const BookDetails = (props) => {
  const { book, open, handleClose } = props;

  const rows = [
    createData('Pages:', `${book.numberOfPages}`),
    createData('Released:', `${book.publicationDate}`),
    createData('Publisher:', `${book.publisher}`),
    createData('Country:', `${book.country}`),
    createData('Media type:', `${book.mediaType}`),
    createData('Number of Characters:', `${book.characters.length}`),
  ];

  // const params = useParams();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ pr: 6, pl: 6, pt: 6 }}>
        <Typography variant="h2" component="p">
          {book.title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {book.authors}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ pr: 6, pl: 6, minWidth: 400 }}>
        <TableContainer sx={{ mt: 2 }}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.detail}>
                  <TableCell component="th" scope="row">
                    {row.detail}
                  </TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions sx={{ pr: 2, pb: 2 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          color="secondary"
          sx={{ mr: 4, mt: 2 }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetails;
