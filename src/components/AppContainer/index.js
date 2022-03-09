import { Grid } from "@material-ui/core";
import React from "react";
import Amenities from "../Amenities";
import { Description } from "../Description";
import Divider from "../Divider";

import useStyles from "./styles";
import { MOCK_DATA } from "./mock_data";

const AppContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={6}>
          <Description
            title={"About This Home"}
            text={
              "BACK ON THE MARKET! Prime Parkchester Location on the oval with park views in every room and walking distance to shops, restaurants and transportation.  This 3 bedroom, 1 bath is ready for your designer touch and priced to sell.  No condo board approval required and investor friendly."
            }
          />
          <Divider />

          <Amenities
            data={MOCK_DATA.find((item) => item.type === "amenities")}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
