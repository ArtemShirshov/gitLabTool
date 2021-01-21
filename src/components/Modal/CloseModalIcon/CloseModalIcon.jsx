import React from 'react';
import { Icon } from '@crpt-ui/core';

export const CloseModalIcon = ({ onClick }) => (
  <div style={{ cursor: 'pointer', position: 'absolute', top: 32, right: 32 }}>
    <Icon name="close" onClick={onClick} />
  </div>
);
