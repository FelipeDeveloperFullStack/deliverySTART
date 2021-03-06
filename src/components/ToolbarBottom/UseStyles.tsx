import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default useStyles