import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
/** Types */
import IPropsDialogTitle from '../../comercio/cadastro/Types/IPropsDialogTitle'
import styles from '../cadastro/Styles/DialogStyles'

const DialogTitle = withStyles(styles)((props: IPropsDialogTitle) => {
  const { children, classes, onClose, ...other } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          ) : null}
      </MuiDialogTitle>
  );
})

export default DialogTitle