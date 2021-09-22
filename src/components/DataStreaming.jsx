import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(2),
  textAlign: "center",
  marginTop: "20px",
  color: theme.palette.text.secondary,
}));

function DataStreaming(props) {
  return (
    <Item>
      <Stack direction="row" spacing={2}>
        <Typography variant="h7">
          <span>Titulo da Transmissão: {props.dataRadio.title} <br /> </span>
          <span>Bitrate: {props.dataRadio.bitrate}<br /></span>
          <span>Musica: {props.dataRadio.song}<br /></span>
          <audio src={props.dataRadio.tuneinurl} controls ></audio>
        </Typography>
      </Stack>
    </Item>
  );
}
export default DataStreaming;
