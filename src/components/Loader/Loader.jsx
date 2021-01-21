import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    minHeight: 450,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 99,
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress />
    </div>
  );
};
