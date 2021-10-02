import React from "react";
import { Grid, Card, Text } from "@geist-ui/react";

const Header = (props) => (
  <React.Fragment>
    <Grid xs={24} justify="center">
      <Card width="90%">
        <Text h1>{props.titleHome}</Text>
      </Card>
    </Grid>
  </React.Fragment>
);

export default Header;
