import React, { useContext } from 'react';
import {TableContainer, TableHead, TableBody, TableCell, TableRow, Table} from '@material-ui/core';
import { multiStepContaxt } from '../../StepContaxt';
function DisplayData() {
  const {finalDetails}  = useContext(multiStepContaxt);
  const rnadom = Math.ceil();
  return (
    <div>
      <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
        <Table border='1' style={{width: '70%', justifyContent: 'center'}} size='small'>
          <TableHead>
            <TableRow style={{backgroundColor: 'burlywood', color: 'aliceblue'}}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>Postal code</TableCell>
            </TableRow>
          </TableHead>
          <br></br>
          <TableBody key={rnadom}>
            {finalDetails.map(data=>(
              <div style={{display: 'flex'}}>
              <TableRow>{data.firstname}</TableRow>
              <TableRow>{data.lastname}</TableRow>
              <TableRow>{data.contact}</TableRow>
              <TableRow>{data.email}</TableRow>
              <TableRow>{data.country}</TableRow>
              <TableRow>{data.district}</TableRow>
              <TableRow>{data.city}</TableRow>
              <TableRow>{data.landmrk}</TableRow>
              <TableRow>{data.postal}</TableRow>
              </div>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DisplayData