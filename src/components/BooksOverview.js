import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const BookOverview = (props) => {
  const { books } = props;

  const bookOverview = books.map((book) => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {book.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Details</Button>
        </CardActions>
      </Card>
    );
  });

  return <Box sx={{ maxWidth: 500 }}>{bookOverview}</Box>;
};

export default BookOverview;
