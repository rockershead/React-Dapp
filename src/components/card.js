import React from 'react'
import {Card,Button,TextField,CardHeader,CardContent,IconButton,Typography} from '@material-ui/core'

import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function ObjectCard({ note, handleDelete,setDoorCode }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.leaseId}
          
        />
        <CardContent>
        <p> { note.home_addr }</p>
        <p> { note.lease_expiry }</p>
        <p> { note.price/Math.pow(10,18) }</p>

        <form onSubmit={e => setDoorCode(e,note.leaseId)}>
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