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
        <Typography variant="h6" gutterBottom component="div">
          Titulo da Transmissão: {props.dataRadio.title}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Bitrate: {props.dataRadio.bitrate}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Musica: {props.dataRadio.song}
        </Typography>
        <audio src={props.dataRadio.tuneinurl} controls></audio>
      </Stack>
    </Item>
  );
}
export default DataStreaming;
