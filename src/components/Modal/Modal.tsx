import React, { Fragment } from 'react';
// @ts-ignore
import { Button, Modal as ModalWindow, Typography } from '@crpt-ui/core';
import { Grid } from '@material-ui/core';

import { Separator } from 'components/Separator/Separator';
import { CloseModalIcon } from 'components/Modal/CloseModalIcon/CloseModalIcon';

interface PropTypes {
  children: React.ReactElement;
  onClose: () => void;
  actions: [
    {
      label: string,
      callback: () => void,
      variant?: 'contained' | 'outlined' | 'text',
      disabled?: boolean,
    },
  ];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  title?: string;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  open: boolean;
  useCloseIcon?: boolean;
  useHeaderDivider?: boolean;
}

export const Modal = ({
  maxWidth,
  title,
  titleVariant,
  open,
  onClose,
  children,
  actions,
  useHeaderDivider,
  useCloseIcon,
  ...rest
}: PropTypes): React.ReactElement => (
  <ModalWindow open={open} onClose={onClose} maxWidth={maxWidth} {...rest}>
    {Boolean(title) && (
      <Typography
        variant={titleVariant}
        style={{
          marginTop: 0,
        }}
      >
        {title}
      </Typography>
    )}

    {useCloseIcon && <CloseModalIcon onClick={onClose} />}
    {useHeaderDivider && Boolean(title) && <Separator />}

    {children}

    {actions.length > 0 && (
      <Fragment>
        <Separator mt={2} />

        <Grid container>
          {actions.map(({ label, callback, variant, disabled, ...rest }) => (
            <Grid item key={label} style={{ marginRight: 16 }}>
              <Button
                onClick={callback}
                variant={variant}
                disabled={disabled}
                {...rest}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    )}
  </ModalWindow>
);

Modal.defaultProps = {
  maxWidth: 'md',
  titleVariant: 'h5',
  useHeaderDivider: true,
  useCloseIcon: true,
  actions: [],
};
