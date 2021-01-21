import { createMuiTheme } from '@material-ui/core/styles';

export const MaterialUiTheme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        color: 'beige',
      },
    },
    MuiButton: {
      background: '#f6f42e',
      contained: {
        '&:hover': {
          backgroundColor: '#f6f42e',
        },
        '&.blue': {
          color: '#55B5E7',
          fill: '#55B5E7',
        },
        backgroundColor: '#FFFFFF',
        borderRadius: '3px',
        boxShadow:
          '0px 3px 4px rgba(0, 0, 0, 0.13), 0px 1px 3px rgba(0, 0, 0, 0.1)',
      },
      label: {
        whiteSpace: 'nowrap',
      },
      root: {
        // '&:hover': {
        //   backgroundColor: '#f6f42e',
        // },
        '&&$disabled': {
          backgroundColor: '#FFFFFF',
          borderRadius: '3px',
          boxShadow:
            '0px 3px 4px rgba(0, 0, 0, 0.13), 0px 1px 3px rgba(0, 0, 0, 0.1)',
          color: 'rgba(82, 83, 90, 0.5)',
          fill: 'rgba(82, 83, 90, 0.5)',
        },
        fontFamily: 'SegoeUI',
        fontSize: '16px',
        fontWeight: '400',
        textTransform: 'none',
      },
      text: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiButtonBase: {
      background: '#f6f42e',
      root: {
        borderRadius: '3px',
        fontFamily: "'SegoeUI', sans-serif",
        background: '#f6f42e',
      },
      contained: {
        background: '#f6f42e',
      },
    },
    MuiDrawer: {
      paper: {
        width: '368px',
      },
    },
    MuiFilledInput: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&$focused': {
          backgroundColor: 'transparent',
        },
        backgroundColor: 'transparent',
        borderRadius: '3px',
        overflow: 'hidden',
      },
      underline: {
        '&:after': {
          borderBottom: '2px solid #f6f42e',
          transition: 'transform 500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        },
        '&:before': {
          display: 'none',
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 20 / 14,
        margin: '0 0 0 10px',
      },
      root: {
        '&:last-child': {
          marginBottom: '0',
        },
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '10px',
        verticalAlign: 'top',
      },
    },
    MuiIconButton: {
      root: {
        padding: '0',
      },
    },
    MuiInput: {
      root: {
        '&$error': {
          '&&:after': {
            borderBottomColor: 'transparent',
            transform: 'scaleX(0)',
          },
        },
      },
      formControl: {
        height: '100%',
        margin: '0 !important',
      },
      underline: {
        '&:after': {
          borderBottom: '2px solid #f6f42e',
          transition: 'transform 500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        },
        '&:before': {
          display: 'none',
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        color: '#63666a',
        fontFamily: 'SegoeUI,sans-serif',
        transform: 'translate(20px, 18px) scale(1)',
      },
      root: {
        '&$error': {
          color: '#abadb6',
        },
        '&$focused': {
          color: 'rgba(82, 83, 90, 0.7)',
        },
        color: '#434244',
        fontSize: '16px',
        lineHeight: '1',
        pointerEvents: 'none',
        zIndex: '1',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '80%',
      },
      shrink: {
        color: 'rgba(82, 83, 90, 0.7)',
        // maxWidth: 'calc(100% - 111px)',
        fontSize: '14px',
        transform: 'translate(20px, 8px) scale(1)',
      },
    },
    MuiList: {
      padding: {
        paddingBottom: '5px',
        paddingTop: '5px',
      },
    },
    MuiListItem: {
      button: {
        '&:focus': {
          backgroundColor: 'rgb(248, 236, 49)',
        },
        '&:hover': {
          backgroundColor: '#f7f7f7',
        },
      },
      root: {
        '&:hover': {
          backgroundColor: 'rgb(248, 236, 49)',
        },
      },
    },
    MuiMenuItem: {
      gutters: {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
      root: {
        '&$selected': {
          backgroundColor: 'rgb(248, 236, 49)',
          '&:hover': {
            backgroundColor: 'rgb(248, 236, 49)',
          },
        },
        alignItems: 'center',
        borderRadius: 0,
        display: 'flex',
        fontSize: '16px',
        height: 'auto',
        minHeight: '40px',
      },
    },
    MuiPaper: {
      root: {
        background: '#fff',
        borderRadius: '3px',
        boxSizing: 'border-box',
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
    MuiSelect: {
      root: {
        background: '#FFFFFF',
        border: '1px solid rgba(196, 196, 196, 0.25)',
        borderRadius: '3px',
        boxSizing: 'border-box',
        width: '100%',
      },
      icon: {
        right: '8px',
      },
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
          borderRadius: 'inherit',
        },
        color: '#52535A',
        padding: '29px 20px 9px',
      },
    },
    MuiSvgIcon: {
      root: {
        verticalAlign: 'top',
        fontSize: '24px',
      },
    },
    MuiTooltip: {
      popper: {
        opacity: '1',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        backdropFilter: 'blur(6px)',
        borderRadius: 4,
        minWidth: 'auto',
        color: 'white',
        padding: '10px 15px',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    MuiTypography: {
      root: {
        color: 'beige',
      },
      body1: {
        fontSize: 16,
        lineHeight: 24 / 16,
      },
      body2: {
        fontSize: 12,
        lineHeight: 18 / 12,
      },
      h1: {
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: '1px',
        lineHeight: 40 / 32,
        textTransform: 'uppercase',
      },
      h2: {
        fontSize: 20,
        lineHeight: 30 / 20,
        fontWeight: 600,
      },
      h3: {
        fontSize: 16,
        lineHeight: 20 / 16,
        fontWeight: 600,
      },
      h4: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '30px',
        marginTop: 20,
        marginBottom: 20,

        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
      h5: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 1.5,
      },
    },
    MuiTable: {
      root: {
        boxShadow: 'inset 0px 1px 0px #f2f2f2',
        tableLayout: 'fixed',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        boxShadow: 'inset 0px -1px 0px #f2f2f2, inset -1px 0px 0px #f2f2f2',
        boxSizing: 'border-box',
        fontSize: '12px',
        lineHeight: 20 / 12,
        padding: '20px',
        position: 'relative',

        '&:last-child': {
          paddingRight: '20px',
        },
      },
      body: {
        fontWeight: 'normal',
      },
      head: {
        color: '#63666a',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: 20 / 12,
      },
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: 390,
      },
    },
    MuiDialogTitle: {
      root: {
        padding: '20px',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '20px',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
      },
    },
    MuiRadio: {
      root: {
        padding: 0,
        userSelect: 'none',

        '&:hover': {
          background: 'transparent',
        },
      },
    },
    MuiCheckbox: {
      root: {
        padding: 0,
        userSelect: 'none',

        '&:hover': {
          background: 'transparent',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#f6f42e',
    },
    secondary: {
      main: '#5ca6dc',
    },
    text: {
      primary: '#63666a',
      secondary: '#868686',
      disabled: '#b8b8b8',
    },
    error: {
      main: '#f34747',
      dark: '#cb3939',
    },
    success: {
      main: '#48c834',
      dark: '#408f33',
    },
    warning: {
      main: '#f5a020',
    },
    grey: {
      100: '#fcfcfc',
      200: '#f9f9f9',
      300: '#f7f7f7',
      400: '#f2f2f2',
      500: '#d9d9d9',
      600: '#b8b8b8',
      700: '#868686',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "'SegoeUI', sans-serif",
    useNextVariants: true,
  },
});
