import React from "react";
import { Grid, Card, Loading, Text } from "@geist-ui/react";

const CardStatus = (props) => (
  <React.Fragment>
    <Grid xs={22} md={10}>
      <Card shadow width="100%">
        <Text h3>{props.data.title}</Text>
        <Loading>Aguardando informações</Loading>
      </Card>
    </Grid>
  </React.Fragment>
);
export default CardStatus;
