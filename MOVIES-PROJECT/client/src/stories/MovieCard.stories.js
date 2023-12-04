import React from 'react';
import { MovieCard } from '../components';
import { movies } from './stub';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/movies card",
  component: MovieCard,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: "centered",
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
test: 'teest'    
  },
}; 

const Template = (args) => <MovieCard {...args} />
export const Primary = Template.bind({});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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
