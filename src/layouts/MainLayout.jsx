import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

function MainLayout() {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ px: 4, py: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;