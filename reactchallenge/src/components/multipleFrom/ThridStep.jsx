import React, { useContext } from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContaxt } from '../../StepContaxt';

function ThridStep() {
    const {submitData ,currentStep, setCurrentStep, userDetails, setUSerDetails} = useContext(multiStepContaxt);

  return (
<div>
    <div style={{textAlign: 'center'}}>
        <TextField variant='outlined' value={userDetails['city']} onChange={(e)=>setUSerDetails({...userDetails, 'city':e.target.value})} margin='normal' label='City' color='secondary' />
    </div>
    <div style={{textAlign: 'center'}}>
        <TextField variant='outlined' value={userDetails['landmark']} onChange={(e)=>setUSerDetails({...userDetails, 'landmark':e.target.value})} margin='normal' label='Land Mark' color='secondary' />
    </div>
    <div style={{textAlign: 'center'}}>
        <TextField variant='outlined' value={userDetails['postal']} onChange={(e)=>setUSerDetails({...userDetails, 'postal':e.target.value})} margin='normal' label='Postal' color='secondary' />
    </div>
    <div style={{textAlign: 'center'}}>
        <Button variant='contained' onClick={()=>setCurrentStep(2)} color='secondary'>Back</Button><span> </span>
        <Button variant='contained' onClick={submitData} color='primary'>Finish</Button>
    </div>
</div>
  )
}

export default ThridStep