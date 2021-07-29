import React from 'react'
import { Link } from "react-router-dom";
import {Card,Button,TextField,CardHeader,CardContent,IconButton,Typography} from '@material-ui/core'

import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function LeaseCard({ note, handleDelete }) {
  console.log(note.code)
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id,note.leaseId)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.leaseId}
          
        />
        <CardContent>
        <p> { note.home_addr }</p>
        <p> { note.lease_expiry }</p>
        <p> { note.price/Math.pow(10,18) }</p>
        <p>Door Code:{note.code}</p>

       {note.isTenant==true? <Link to={{pathname: '/ViewTenants',
                 state: {
                 leaseId: note.leaseId
                    }
                 }}> View My Tenants </Link>:<p></p>}


          
        </CardContent>
      </Card>
    </div>
  )
}