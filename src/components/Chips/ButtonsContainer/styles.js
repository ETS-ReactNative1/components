import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    pointerEvents: "none",
  },
}));
