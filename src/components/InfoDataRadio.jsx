import React from "react";
import { Table } from "@geist-ui/react";
import { Wifi, WifiOff} from '@geist-ui/react-icons'


const InfoDataRadio = (props) => {
  const data = [
    {
      titulo: props.data.title,
      bitrate: props.data.bitrate,
      ouvintes: props.data.listeners ? props.data.listeners : "n/d" ,
      pico: props.data.listeners ? props.data.listeners : "n/d" ,
      formato: props.data.tuneinformat,
      statusServer: props.data.serverstate ? <Wifi /> : <WifiOff /> 
    },
  ];

  return (
    <React.Fragment>
      <Table data={data} width="95%">
        <Table.Column prop="titulo" label="titulo" />
        <Table.Column prop="bitrate" label="bitrate" />
        <Table.Column prop="ouvintes" label="ouvintes" />
        <Table.Column prop="formato" label="formato" />
        <Table.Column prop="statusServer" label="status" />
      </Table>
    </React.Fragment>
  );
};
export default InfoDataRadio;
