import React from 'react';
import { MovieCard } from '../components';
import { movies } from './stub';



export default {
  title: "Card/movies card",
  component: MovieCard,
  tags: ["autodocs"],
  
}; 

const Template = (args) => <MovieCard {...args} />
export const Primary = Template.bind({});



Primary.args = {
  movie: movies[0]
}


