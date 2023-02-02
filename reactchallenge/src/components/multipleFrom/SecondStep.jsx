import React, { useContext } from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContaxt } from '../../StepContaxt';

function SecondStep() {
    const {currentStep, setCurrentStep, userDetails, setUSerDetails} = useContext(multiStepContaxt);
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <TextField variant='outlined' value={userDetails['email']} onChange={(e)=> setUSerDetails({...userDetails, 'email':e.target.value})} margin='normal' label='Email' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            <TextField variant='outlined' value={userDetails['country']} onChange={(e)=>setUSerDetails({...userDetails, 'country':e.target.value})} margin='normal' label='Country' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            <TextField variant='outlined' value={userDetails['district']} onChange={(e)=>setUSerDetails({...userDetails, 'district':e.target.value})} margin='normal' label='District' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            <Button onClick={()=>setCurrentStep(1)} variant='contained' color='secondary'>Back</Button> <span></span>
            <Button onClick={()=>setCurrentStep(3)} variant='contained' color='primary'>Next</Button>
        </div>
    </div>
  )
}

export default SecondStep