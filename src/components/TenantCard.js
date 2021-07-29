import React from 'react'
import {Card,Button,TextField,CardHeader,CardContent,IconButton,Typography} from '@material-ui/core'

import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function TenantCard({ note, setDoorCode }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
         
          title={note.tenantName}
          
        />
        <CardContent>
        
        <p> { note.age }</p>
        <p> { note.race }</p>
        <p> { note.tenant_wallet_address }</p>
       

        <form onSubmit={e => setDoorCode(e,note.leaseId,note.tenant_wallet_address)}>
        <p>
        <TextField
            required
            label="Door Code"
            inputProps={{ step: "any" }}
            type="text"
            variant="filled"
          />
          &nbsp;&nbsp;&nbsp;
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          
        >
          Send Door Code
        </Button>
        
        
        
        </p>
        
        </form>


          
        </CardContent>
      </Card>
    </div>
  )
}