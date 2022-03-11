import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { History } from "../History";
import { HISTORY_MOCK } from "./history_mock";

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const common = { isMobile };
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <History data={HISTORY_MOCK} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;

/*

  <Description
            {...common}
            title={"About This Home"}
            text={`Elit tempor dolore duis commodo. Aliqua pariatur est mollit consequat ea ut. Sint exercitation non aute amet nisi nisi culpa ex dolore nostrud veniam ullamco eu. Amet reprehenderit minim nisi elit aliquip do consequat excepteur esse consectetur. Consequat velit est reprehenderit ipsum est deserunt cupidatat nisi excepteur amet culpa magna. Nostrud dolor deserunt proident enim non sit exercitation minim cupidatat ad.

Ipsum esse culpa aliqua dolore elit. Laboris adipisicing occaecat tempor id duis nostrud ut veniam exercitation in. Ea est occaecat cillum ex laboris ut duis Lorem incididunt reprehenderit voluptate. Non laboris aliquip in deserunt officia duis sunt.

Qui minim culpa do enim elit quis. Elit ipsum anim sit irure enim cupidatat. Proident irure ad amet consequat cupidatat officia mollit duis occaecat consectetur et eiusmod cupidatat labore. Non laborum reprehenderit ipsum ea irure labore adipisicing id. Officia sit aute do enim irure. Consequat eu adipisicing magna sunt amet ex incididunt fugiat minim amet dolore velit. Ea ut incididunt officia ad anim sit irure esse cupidatat.

Incididunt anim voluptate incididunt minim nisi. Ut fugiat fugiat voluptate mollit qui sit fugiat adipisicing proident deserunt nisi deserunt mollit. Consequat ex ea velit mollit enim quis enim consequat. Mollit non dolor ullamco aliquip ipsum quis proident laboris occaecat incididunt deserunt. Aliqua culpa aliqua exercitation aute consequat commodo fugiat eu dolore cillum aute commodo non. Non laboris ipsum nulla labore elit ullamco aliqua sit reprehenderit reprehenderit dolor. Ea exercitation in est id reprehenderit in deserunt incididunt excepteur ullamco anim elit amet magna.`}
          />
          <Divider {...common} />

          <Amenities
            {...common}
            data={MOCK_DATA.find((item) => item.type === "amenities")}
          />


*/
