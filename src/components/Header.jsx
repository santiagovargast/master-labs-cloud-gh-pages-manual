import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'primary.main' }}>
          Vtars Gallery
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Inicio
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;