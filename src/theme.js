import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    typography: {
        h1: { fontSize: 36 },
        h2: { fontSize: 32 },
        h3: { fontSize: 28 },
        h4: { fontSize: 24 },
    }
});

export default theme;