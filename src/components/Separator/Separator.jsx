import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  separator: {
    marginLeft: -32,
    marginRight: -32,
    borderTop: '1px solid #f2f2f2',
  },
});

export const Separator = ({ mt, mb }) => {
  const classes = useStyles();

  return React.createElement(Box, { className: classes.separator, mb, mt });
};

Separator.defaultProps = {
  mt: 0,
  mb: 2,
};
