import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    width: "100%",
    position: "relative",
  },
  chipsContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    overflowX: "hidden",
  },
}));
