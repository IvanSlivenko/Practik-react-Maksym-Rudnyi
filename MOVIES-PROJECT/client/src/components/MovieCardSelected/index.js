import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CardMenu from "../CardMenu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes, { number } from "prop-types";

const MovieCardSelected = ({ movie, onCardDelete }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {movie.genres.length ? (
              <Typography component="div" variant="p">
                {movie.genres[0].name}
              </Typography>
            ) : null}

            <Typography component="div" variant="p">
              Length : {movie.runtime}
            </Typography>
          </Box>
          <CardMenu>
            <MenuItem onClick={onCardDelete}>Delete</MenuItem>
          </CardMenu>
        </CardContent>
      </Box>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number
  }).isRequired,
  onCardDelete: PropTypes.func,
};

export default MovieCardSelected;
