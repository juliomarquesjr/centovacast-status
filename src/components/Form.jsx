import React from "react"
import { Grid, Card, Input,Spacer, Button } from "@geist-ui/react";
import { Database } from "@geist-ui/react-icons";

const Form = props =>(
    <React.Fragment>
        <Grid xs={22} md={10}>
        <Card shadow width="100%" height="350px">
          <Input placeholder="IP our Domains Server" 
          scale={4 / 3} 
          width="95%"
          value={props.values.server}
          onChange={event => props.setDataForm({...props.values, server: event.target.value})}
          >
            Domain ou IP Server Centova Cast
          </Input>
          <Spacer h={3} />
          <Input
            placeholder="User Account Centova Cast"
            scale={4 / 3}
            width="95%"
            value={props.values.user}
            onChange={event => props.setDataForm({...props.values, user: event.target.value})}
          >
            Username your Centova Cast
          </Input>
          <Spacer h={3} />
          <Button icon={<Database />} type="success">
            Verify Account
          </Button>
        </Card>
      </Grid>
    </React.Fragment>
)
export default Form