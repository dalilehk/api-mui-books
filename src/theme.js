import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 800,
      textTransform: 'uppercase',
      fontFamily: 'Nanum Myeongjo',
    },
    h2: { fontSize: 30, fontWeight: 800, fontFamily: 'Nanum Myeongjo' },
    h3: { fontSize: 28 },
    h4: { fontSize: 24 },

    button: {
      textTransform: 'uppercase',
    },
  },
});

export default theme;
