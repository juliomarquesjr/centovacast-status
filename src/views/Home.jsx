import React from "react";
import { Grid, Card, Input,Spacer, Button, Loading } from "@geist-ui/react";
import Header from "../components/Header";
import Form from "../components/Form";

const Home = () => (
  <React.Fragment>
    <Grid.Container gap={2} justify="center">
      <Header titleHome="Centova Cast - Verify Status Account" />
      <Form />
      <Grid xs={22} md={10}>
        <Card shadow width="100%">
          <Loading>Aguardando informações</Loading>
        </Card>
      </Grid>
    </Grid.Container>
  </React.Fragment>
);
export default Home;
