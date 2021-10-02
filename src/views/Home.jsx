import React, {useState} from "react";
import { Grid } from "@geist-ui/react";
import Header from "../components/Header";
import Form from "../components/Form";
import CardStatus from "../components/CardStatus";

const Home = () => {

    const data = {
        server: '',
        user: ''
    }

    const [dataForm, setDataForm] = useState(data)
    console.log(dataForm)

  return (
    <React.Fragment>
      <Grid.Container gap={2} justify="center">
        <Header titleHome="Centova Cast - Status Account" />
        <Form values={dataForm} setDataForm={setDataForm} />
        <CardStatus />
      </Grid.Container>
    </React.Fragment>
  );
};
export default Home;
