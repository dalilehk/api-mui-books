import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const Book = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more details</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
