import React from 'react';
import { WithStyles } from '@material-ui/core/styles'
import styles from '../Styles/DialogStyles'

export default interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}