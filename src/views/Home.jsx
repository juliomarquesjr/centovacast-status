import React from "react";
import { Grid, Card, Input,Spacer, Button, Loading } from "@geist-ui/react";
import { Database } from "@geist-ui/react-icons";
import Header from "../components/Header";

const Home = (props) => (
  <React.Fragment>
    <Grid.Container gap={2} justify="center">
      <Header titleHome="Centova Cast - Verify Status Account" />
      <Grid xs={22} md={10}>
        <Card shadow width="100%" height="350px">
          <Input placeholder="IP our Domains Server" scale={4 / 3} width="95%">
            Domain ou IP Server Centova Cast
          </Input>
          <Spacer h={3} />
          <Input
            placeholder="User Account Centova Cast"
            scale={4 / 3}
            width="95%"
          >
            Username your Centova Cast
          </Input>
          <Spacer h={3} />
          <Button icon={<Database />} type="success">
            Verify Account
          </Button>
        </Card>
      </Grid>
      <Grid xs={22} md={10}>
        <Card shadow width="100%">
          <Loading>Aguardando informações</Loading>
        </Card>
      </Grid>
    </Grid.Container>
  </React.Fragment>
);
export default Home;
