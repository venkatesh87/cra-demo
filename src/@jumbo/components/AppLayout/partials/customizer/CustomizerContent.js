import React from 'react';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(theme => ({
  customizerRoot: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
  },
  customizerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 8px 16px 16px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.palette.background.paper,
    minHeight: 64,
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      minHeight: 72,
    },
  },
  customizerContentArea: {
    flex: 1,
    padding: '24px 16px 16px',
    '& > *': {
      marginBottom: 16,
    },
  },
  scrollbarRoot: {
    height: 'calc(100vh - 64px)',
    overflowX: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 72px)',
    },
  },
}));

const CustomizerContent = ({ onClose, children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.customizerRoot}>
      <Box className={classes.customizerHeader}>
        <Typography component="h2" variant="h2">
          Theme Settings
        </Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className={classes.scrollbarRoot}>
        <Box className={classes.customizerContentArea}>{children}</Box>
      </Box>
    </Box>
  );
};

export default CustomizerContent;
