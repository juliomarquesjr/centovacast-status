import React from "react";
import { Table, Spacer, Description, Image, Collapse, Text } from "@geist-ui/react";
import { Wifi, WifiOff } from "@geist-ui/react-icons";

const InfoDataRadio = (props) => {
  const dataStrming = [
    {
      titulo: props.data.title,
      bitrate: props.data.bitrate,
      ouvintes: props.data.listeners ? props.data.listeners : "n/d",
      pico: props.data.listeners ? props.data.listeners : "n/d",
      formato: props.data.tuneinformat,
      statusServer: props.data.serverstate ? <Wifi /> : <WifiOff />,
    },
  ];

  const dataAutoDJ = [
    {
      capa: (
        <Image width="80px" height="80px" src={props.data.track.imageurl} />
      ),
      musica: props.data.song,
      artista: props.data.track.artist,
      titulo: props.data.track.title,
    },
  ];
  return (
    <React.Fragment>
      <Description
        title="Streaming"
        content="Informações relacionadas a conta de Streaming"
      />
      <Table data={dataStrming} width="95%">
        <Table.Column prop="titulo" label="titulo" />
        <Table.Column prop="bitrate" label="bitrate" />
        <Table.Column prop="ouvintes" label="ouvintes" />
        <Table.Column prop="formato" label="formato" />
        <Table.Column prop="statusServer" label="status" />
      </Table>

      <Spacer h={1} />

      <Description
        title="AutoDJ"
        content="Informações relacionadas ao AutoDJ"
      />

      <Table data={dataAutoDJ} width="95%">
        <Table.Column prop="capa" label="capa" />
        <Table.Column prop="musica" label="musica" />
        <Table.Column prop="artista" label="artista" />
        <Table.Column prop="titulo" label="titulo" />
      </Table>
      <Spacer h={1} />
      <audio controls src={props.data.tuneinurl}></audio>
    </React.Fragment>
  );
};
export default InfoDataRadio;
