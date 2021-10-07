import React, { useEffect, useState } from "react";
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

  //State referente ao loading
  const [loading, setLoading] = useState(false);

  async function verifyDataJson() {
    setLoading(true) //Mostra o loading
    await getDataRadio(
      `https://${dataForm.host}:2199/rpc/${dataForm.user}/streaminfo.get`
    ).then((retornoJson) => setDataJson(retornoJson));
  }

  //UseEffect usdo para alterar monitorar os dados do JSon e desligar o Loading assim que as informações forem recebidas
  useEffect(function(){
    setLoading(false)
  },[dataJson])

  return (
    <React.Fragment>
      <Grid.Container gap={2} justify="center">
        <Header titleHome="Centova Cast - Status Account" />
        <Form
          values={dataForm}
          setDataForm={setDataForm}
          verifyDataJson={verifyDataJson}
        />
        <CardStatus data={dataJson} loading={loading} />
      </Grid.Container>
    </React.Fragment>
  );
};
export default Home;
