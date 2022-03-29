import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.common.lightGrey}`
  },
  titleContainer: {
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: 25,
    top: 16,
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
