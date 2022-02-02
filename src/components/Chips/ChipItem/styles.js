import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "7px 14px",
    display: "flex",
    textAlign: "center",
    color: "#606060",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: "18px",
    backgroundColor: "#F2F4F6",
    borderRadius: "8px",
    marginRight: 4,
    cursor: "pointer",
    " & :last-child": {
      marginRight: 0,
    },
    height: 32,
    "&:hover": {
      backgroundColor: "#2A7A7B",
      color: "#fff",
    },
    whiteSpace: "nowrap",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#2A7A7B",
    color: "#fff",
  },
}));
