import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ArtworkCard({ artwork }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ bgcolor: 'background.paper' }}>
      <CardActionArea onClick={() => navigate(`/obra/${artwork.id}`)}>
        <CardContent>
          <Typography variant="h6">{artwork.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {artwork.artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ArtworkCard;