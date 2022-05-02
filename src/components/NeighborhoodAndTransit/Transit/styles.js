import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: 16,
    fontFamily: 'GloberAdjusted',
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: 0.2,
    letterSpacing: '0.20000000298023224px',
    paddingBottom: 19,
    margin: 0,
    color: '#000'
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '28px',
    letterSpacing: -0.2,
    paddingBottom: 4,
    margin: 0,
    marginTop: 15,
    textAlign: 'center'
  },
  columnItem: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    lineHeight: '18px',
    letterSpacing: 0.2,
    paddingTop: 6,
    marginRight: 10,
    color: '#606060'
  },
  columnItemBold: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: 0.2,
    paddingTop: 6
  },
  rowItem: {
    borderTop: `1px solid #E6E9EB;`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 11,
    flexWrap: 'wrap',
    [theme.breakpoints.down('600')]: {
      display: 'block'
    }
  },
  rowLastItem: {
    borderBottom: '1px solid #E6E9EB'
  },
  gridPadding: {
    marginBottom: 30
  },
  roundWrapper: {
    width: '45%',
    flexWrap: 'wrap',
    display: 'flex',
    [theme.breakpoints.down(600)]: {
      width: '100%',
      marginLeft: 52
    }
  },
  lineWrapper: {
    display: 'flex'
  }
}));

export { useStyles };
