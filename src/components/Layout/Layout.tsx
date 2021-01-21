import React from 'react';
import { Box, Container } from '@material-ui/core';

// @ts-ignore
export const Layout = ({ children }) => {
  return (
    <Box my={2}>
      <Container>
        <Box mb={2}>{children}</Box>
      </Container>
    </Box>
  );
};
