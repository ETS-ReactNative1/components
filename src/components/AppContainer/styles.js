import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: 12,
    height: 'calc(100vh - 61px)',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: 'inherit',
      flexDirection: 'column',
      padding: 13.5,
      height: 'auto'
    },
    padding: '0 7%',
    marginTop: 20
  },
  widgetsContainer: {
    width: '100%'
  },
  listingsWidgetContainer: {
    width: '50%',
    height: '100%',
    padding: 10,
    [theme.breakpoints.down('md')]: {
      width: 'inherit',
      marginTop: 20,
      padding: 0
    }
  }
}));
