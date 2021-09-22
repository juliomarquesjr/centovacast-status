import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import Stack from "@mui/material/Stack";
import { getDataRadio } from "../functions/getDataRadio";
import DataStreaming from "./DataStreaming";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  marginTop: "20px",
  color: theme.palette.text.secondary,
}));

function Form() {
  const [dataRadio, setDataRadio] = useState("Sem Dados");
  const [server, setServer] = useState("r15.ciclano.io");
  const [user, setUser] = useState("rdocari");

  function renderData(){
    getDataRadio(`http://${server}:2199/rpc/${user}/streaminfo.get`).then(
      returData => setDataRadio(returData)
    )
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item>
              <Stack direction="row" spacing={2}>
                <TextField
                  id="outlined-basic-normal"
                  label="Servidor"
                  value={server}
                  fullWidth
                  variant="outlined"
                  onChange={(event) => setServer(event.target.value)}
                />

                <TextField
                  id="outlined-basic-normal"
                  label="Usuário"
                  variant="outlined"
                  value={user}
                  onChange={(event) => setUser(event.target.value)}
                />
              </Stack>
            
              <Stack direction="column" spacing={1}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Limpar
                </Button>

                <Button
                  variant="contained"
                  onClick={() => renderData()}
                  startIcon={<SendIcon />}
                >
                  Verificar
                </Button>
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <DataStreaming dataRadio={dataRadio} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
export default Form;
