import React from "react";
import { Grid, Card, Loading } from "@geist-ui/react";
import InfoDataRadio from "./InfoDataRadio";

const CardStatus = (props) => {
  return (
    <React.Fragment>
      <Grid xs={22} md={10}>
        <Card shadow width="100%">
          {props.data === "" ? (
            <Loading>Aguardando informações</Loading>
          ) : (
            <InfoDataRadio data={props.data} />
          )}
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default CardStatus;
