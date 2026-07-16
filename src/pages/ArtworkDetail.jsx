import { Box, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { artworks } from '../data/artworks.js';

function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find(function (item) {
    return item.id === Number(id);
  });


  return (
    <Box>
      <Typography variant="h4" gutterBottom>{artwork.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {artwork.artist}
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>{artwork.description}</Typography>
      <Button onClick={() => navigate('/')}>Volver</Button>
    </Box>
  );
}

export default ArtworkDetail;