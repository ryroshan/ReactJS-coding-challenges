import React, { useContext } from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContaxt } from '../../StepContaxt';

function FirstStep() {
    const {setCurrentStep, userDetails, setUSerDetails} = useContext(multiStepContaxt);

  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <TextField error variant='outlined' value={userDetails['firstname']} onChange={(e)=>setUSerDetails({...userDetails, 'firstname': e.target.value})} amargin='normal' label='First Name' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            <TextField variant='outlined' value={userDetails['lastname']} onChange={(e)=>setUSerDetails({...userDetails, 'lastname': e.target.value})} margin='normal' label='Last Name' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            <TextField variant='outlined' value={userDetails['contact']} onChange={(e)=>setUSerDetails({...userDetails, 'contact': e.target.value})} margin='normal' label='Contact' color='secondary' />
        </div>
        <div style={{textAlign: 'center'}}>
            {userDetails.length === 0 ? 
            <Button disabled onClick={()=>setCurrentStep(2)} variant='contained' color='primary'>Next</Button>
            :  
            <Button onClick={()=>setCurrentStep(2)} variant='contained' color='primary'>Next</Button>

        }
        </div>
    </div>
  )
}

export default FirstStep