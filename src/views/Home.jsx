import React from "react";
import { Grid } from "@geist-ui/react";
import Header from "../components/Header";
import Form from "../components/Form";

const Home = () => (
  <React.Fragment>
    <Grid.Container gap={2} justify="center">
      <Header titleHome="Centova Cast - Verify Status Account" />
      <Form />
    </Grid.Container>
  </React.Fragment>
);
export default Home;
