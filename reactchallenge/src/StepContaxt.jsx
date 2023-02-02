import React, { useContext, useState } from 'react'
import App from './App';

export const multiStepContaxt = React.createContext();

function StepContaxt() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userDetails, setUSerDetails] = useState([]);
    const [finalDetails, setFinalDetails] = useState([]);
    function submitData(){
      setFinalDetails(()=>[...finalDetails, userDetails])
      setUSerDetails('');
      setCurrentStep(1)
    } 

  return (
    <div>
        <multiStepContaxt.Provider value={{currentStep, setCurrentStep, userDetails, setUSerDetails, finalDetails, setFinalDetails, submitData}}>
            <App />
        </multiStepContaxt.Provider>
    </div>
  )
}

export default StepContaxt