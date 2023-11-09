import React from "react";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { PropTypes } from "prop-types";

const sButton = ({  onClick, children, color }) => {
  

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color={color} > {children}</Button>
    </Stack>
  );
};

sButton.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default sButton;
