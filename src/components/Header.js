import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <header>
      {/* <Typography variant="h1" textAlign="center">
//         <LibraryBooksIcon /> Rest API + MaterialUI React Challenge
//       </Typography> */}
      <Link to="/books" style={{ textDecoration: 'none' }}>
        <Typography variant="h1" sx={{ pt: 6, pb: 2 }} align="center">
          Game of Thrones
        </Typography>
      </Link>
    </header>
  );
};

export default Header;
