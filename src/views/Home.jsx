import React, { useState } from "react";
import { Grid } from "@geist-ui/react";
import Header from "../components/Header";
import Form from "../components/Form";
import CardStatus from "../components/CardStatus";
import { getDataRadio } from "../functions/getDataRadio";

const Home = () => {
  const server = {
    host: "r15.ciclano.io",
    user: "adebiagi",
  };

  const [dataForm, setDataForm] = useState(server);
  const [dataJson, setDataJson] = useState("");

   async function verifyDataJson() {
     await getDataRadio(
      `https://${dataForm.host}:2199/rpc/${dataForm.user}/streaminfo.get`
    ).then(retornoJson => setDataJson(retornoJson));
  }

  return (
    <React.Fragment>
      <Grid.Container gap={2} justify="center">
        <Header titleHome="Centova Cast - Status Account" />
        <Form
          values={dataForm}
          setDataForm={setDataForm}
          verifyDataJson={() => verifyDataJson()}
        />
        <CardStatus data={dataJson}/>
      </Grid.Container>
    </React.Fragment>
  );
};
export default Home;
