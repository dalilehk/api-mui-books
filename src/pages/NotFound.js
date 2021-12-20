import { Link } from 'react-router-dom';
import { Typography, Paper, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Paper
      align="center"
      sx={{ mt: 4, pt: 8, pb: 8, backgroundColor: '#f5f5f5' }}
    >
      <Typography variant="h3" component="p">
        404
      </Typography>
      <Typography
        variant="h3"
        component="p"
        sx={{ mt: 4, fontWeight: 800, fontSize: 45 }}
      >
        Page not found
      </Typography>
      <Link to="/books" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary" sx={{ mt: 6, p: 2 }}>
          Back to the homepage
        </Button>
      </Link>
    </Paper>
  );
};

export default NotFound;
