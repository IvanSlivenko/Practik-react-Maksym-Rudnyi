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

// export const Primary = {
//   args: {
//     primary: true,
//     label: "movies card",
//     movie:movies[0]
//   },
// };

// export const Secondary = {
//   args: {
//     label: "movies card",
//     movie: movies[0],
//   },
// };

// export const Large = {
//   args: {
//     size: "large",
//     label: "movies card",
//     movie: movies[0],
//   },
// };

// export const Small = {
//   args: {
//     size: "small",
//     label: "movies card",
//     movie: movies[0],
//   },
// };
