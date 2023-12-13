import { useState } from 'react';
import { Box, Grid, Paper, styled, Pagination } from "@mui/material";

import { useQuery } from "@apollo/client";
import { MovieCard } from '../../components';
import { MOVIES_QUERY } from './queries';


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
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page }});
  
  const paginationHandler = (event, page) => { 
    setPage(page)
    
  }

  if (error) { 
    return 'Error';
  }

  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

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
          <Grid item xs={12} md={8}>
            <Paper>
              List of movies
              <Box sx={{ flexGrow: 1, padding: 2 }}>
                {loading && "Loading..."}
                {data && (
                  <Grid container spacing={2}>
                    {data.movies.results.map((movie) => (
                      <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
              <Box
                mt={2}
                pb={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Pagination
                  count={pagesCount}
                  page={page}
                  onChange={paginationHandler}/>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectedMovies>Selected movies</SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    );
}
export default Home;