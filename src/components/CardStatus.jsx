import React from "react";
import { Grid, Card, Loading } from "@geist-ui/react";
import InfoDataRadio from "./InfoDataRadio";

const CardStatus = (props) => {
  const renderData = () => {
    if (props.loading) {
      return <Loading>Carregando</Loading>;
    } else if (props.data !== "") {
      return <InfoDataRadio data={props.data} />;
    }
  };

  return (
    <React.Fragment>
      <Grid xs={22} md={10}>
        <Card shadow width="100%">
          {renderData()}
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default CardStatus;
