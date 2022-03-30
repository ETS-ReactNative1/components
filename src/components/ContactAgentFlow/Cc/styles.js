import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  emailAutocompleteInputRoot: {
    paddingRight: 140
  },
  emailAutocompleteEndAdornment: {
    position: 'absolute',
    top: 15,
    right: 0
  },
  userListContent: {
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden'
  }
}));
