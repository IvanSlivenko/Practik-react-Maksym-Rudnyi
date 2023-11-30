import {
    Box,
    Grid,
    Paper,
    styled
} from '@mui/material';
import { MovieCard } from '../../components';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',  
  ...theme.typography.body2,
  padding:theme.spacing(1),
    // color: '#fff',
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top:theme.spacing(2),
  bottom: "0"
    
}));



const Home = () => { 
    return (
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>Filter section</Paper>
          </Grid>
          <Grid item xs={4} md={8}>
            <Paper>
                <MovieCard/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectedMovies>
                Selected movies
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    );
}
export default Home;