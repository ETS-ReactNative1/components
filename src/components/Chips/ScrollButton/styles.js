import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: 40,
    transition: "opacity 0.2s ease",
    cursor: "pointer",
    pointerEvents: "all",
  },
}));
