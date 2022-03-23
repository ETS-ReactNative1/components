import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    borderRadius: 8,
    padding: 0,
  },
  item: {
    paddingLeft: 12,
    paddingRight: 12,
    minHeight: 32,
    minWidth: 124,
    display: "flex",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    fontFamily: "GloberAdjusted",
    lineHeight: "20px",
    fontWeight: 400,
  },
  iconCont: {
    display: "flex",
    alignItems: "center",
    marginRight: 14,
    "& svg": {
      width: 16,
      height: 16,
    },
  },
  itemRed: {
    color: "#A82B31",
  },
}));
