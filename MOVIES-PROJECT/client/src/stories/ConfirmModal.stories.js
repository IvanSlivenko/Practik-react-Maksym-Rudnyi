import React from 'react';
import { ConfirmModal } from "../components";





export default {
  title: "ConfirmModal component",
  component: ConfirmModal,
  tags: ["autodocs"],
}; 

const Template = (args) => <ConfirmModal {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  open: true,
  url: 'http://localhost:3000/recommend?title="my movies"&ids=232,434',
  title: "My favorite movies",
  onClose: () => { }
};

// ConfirmModal.propTypes = {
//   open: PropTypes.bool,
//   url: PropTypes.string,
//   title: PropTypes.string,
//   onClose: PropTypes.func,
// };