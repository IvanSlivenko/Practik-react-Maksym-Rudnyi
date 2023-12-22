import React from 'react';

import { MovieCardSelected } from "../components";
import { movies } from './stub';




export default {
  title: "Card/movies card selected",
  component: MovieCardSelected,
  tags: ["autodocs"],
}; 

const TemplateSelected = (args) => <MovieCardSelected {...args} />
export const Primary = TemplateSelected.bind({});



Primary.args = {
  movie: movies[0]
}

