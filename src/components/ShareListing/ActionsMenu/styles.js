import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    borderRadius: 8,
    padding: 0
  },
  item: {
    paddingLeft: 12,
    paddingRight: 12,
    minHeight: 30,
    minWidth: 210,
    display: 'flex',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 13,
    color: '#2A7A7B',
    fontWeight: 700
  },
  iconCont: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 12,
    '& svg': {
      fill: '#2A7A7B',
      width: 16,
      height: 16
    }
  },
  itemRed: {
    color: '#A82B31'
  }
}));
