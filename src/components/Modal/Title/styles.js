import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: theme.spacing(3)
  },
  text: {
    fontWeight: 'bold',
    color: theme.palette.common.black
  },
  closeButton: {
    position: 'absolute',
    right: 25,
    top: 25,
    width: 26,
    height: 26,
    padding: 6,
    color: theme.palette.common.darkGrey,
    cursor: 'pointer',
    '& > svg': {
      width: '100%',
      height: '100%'
    },
    '&:hover': {
      color: theme.palette.common.black
    }
  }
}));
