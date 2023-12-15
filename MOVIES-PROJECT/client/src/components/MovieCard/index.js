import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styles } from "@mui/material/styles";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Box from "@mui/material/Box";
import CardMenu from "../CardMenu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from 'prop-types';




const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const PlusIcon = styled(Box)(({ theme }) => ({ 
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,.6)',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1
    }     
}))

const MovieCard = ({movie, onCardSelect}) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative", border: 1 }}>
      <CardMenu>
        <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
      </CardMenu>
      <Box sx={{position: 'r elative'}}>
        <CardMedia
          component="img"
          height="200"
          image={movie.image}
          alt={movie.title}
        />

        <PlusIcon onClick={() => onCardSelect(movie)}>
          <AddBoxOutlinedIcon sx={{ fontSize: 80 }} />
        </PlusIcon>
      </Box>

      <CardInfo>
        <Typography variant="h5" gutterBottom>
          {movie.title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
      }).isRequired,
    onCardSelect: PropTypes.func
};


export default MovieCard;
