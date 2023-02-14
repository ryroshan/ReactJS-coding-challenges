import { useContext, useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from "./components/header/Header";
import FirstStep from "./components/multipleFrom/FirstStep";
import SecondStep from "./components/multipleFrom/SecondStep";
import ThridStep from "./components/multipleFrom/ThridStep";
import ToggleM from "./components/toggle-modal";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContaxt } from "./StepContaxt";
import DisplayData from "./components/multipleFrom/DisplayData";
import Posts from "./components/pagination/Posts";
import UsePagination from "./components/pagination/UsePagination";
import useFetch from "./Hooks/useFetch";
function App() {
  // const [toggle, setToggle] = useState(false);
  // const {currentStep, finalDetails} = useContext(multiStepContaxt);
 const {loading, posts, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
  // const [currentPage, setCurrentPage] = useState(1);
  // const [perPost, setPerPost] = useState(10);
  console.log({posts, loading});


  // function paginate(pageNumber){
  //   setCurrentPage(pageNumber)
  // }
  // function showStep(stepNum) {
  //   switch (stepNum) {
  //     case 1:
  //       return <FirstStep />;
  //     case 2:
  //       return <SecondStep />;
  //     case 3:
  //       return <ThridStep />;
  //   }
  // }

  const indexOflastPage = currentPage * perPost;
  const indexOfFirstPage = indexOflastPage - perPost;;
  const CurrentPosts = posts.slice(indexOfFirstPage, indexOflastPage)
  return (
    <div className="App">
    </div>
  );
}

export default App;

    //  {/* <h1 style={{background: 'orange', textAlign: 'center'}}>React-Challenges </h1>
    //   <Header />
    //   <hr></hr>
    //   <hr></hr>
    //   <div style={{textAlign: 'center'}}>
    //   <h2>Click button to Open a Modal</h2>
    //   <button onClick={()=>setToggle(true)}>Click Me!</button>
    //   </div>
    //   {toggle && <ToggleM closeToggle={setToggle}/>} */}
    //   <div className="child">
    //     <div>
    //       <Stepper activeStep={ currentStep -1 }>
    //         <Step>
    //           <StepLabel></StepLabel>
    //         </Step>
    //         <Step>
    //           <StepLabel></StepLabel>
    //         </Step>
    //         <Step>
    //           <StepLabel></StepLabel>
    //         </Step>
    //       </Stepper>
    //     </div>
    //     <h1 style={{ color: "red", textDecoration: "underline", textAlign: 'center' }}>
    //       React multi step form
    //     </h1>
    //     {showStep(currentStep)}
    //     <br></br>
    //     <br></br>
    //     {/* {finalDetails.length > 0 && <DisplayData />} */}
    //   </div>