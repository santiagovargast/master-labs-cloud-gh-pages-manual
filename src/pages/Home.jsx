import { Box, Typography, Grid } from '@mui/material';
import { artworks } from '../data/artworks.js';
import ArtworkCard from '../components/ArtworkCard.jsx';

function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>Vtars Gallery</Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>Servicios</Typography>
        <Typography variant="body1" color="text.secondary">
          Exposiciones de obras
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>Obras</Typography>
        <Grid container spacing={2}>
          {artworks.map(function (artwork) {
            return (
              <Grid item xs={12} sm={4} key={artwork.id}>
                <ArtworkCard artwork={artwork} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;