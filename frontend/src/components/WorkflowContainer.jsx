import React, { useState } from 'react';
import Workflow from "./Workflow"
import './WorkflowContainer.css';

const cwf = ["cwf 1","cwf 2","cwf 3"]
const awf = ["awf 1","awf 2","awf 1","awf 3","awf 4","awf 5","awf 6","awf 7","awf 8","awf 9"]

function WorkflowContainer() {
    const [btn, changeBtn] = useState(["cwf",cwf])

    function handleBtnChange(event){
        if (event.target.value==="cwf"){
          changeBtn([event.target.value,cwf])
        }else{
          changeBtn([event.target.value,awf])
        }       
    }

  return (
    <div className='wfContainer'>
        <div className='wfContainerHeader'>
            <button onClick={handleBtnChange} value="cwf" className={(btn[0]==="cwf")?"btnActive":""}>Currrent Running Workflows</button>
            <button onClick={handleBtnChange} value="awf" className={(btn[0]==="awf")?"btnActive":""}>All Workflows</button>
        </div>
        
        {
          btn[1].map((wf)=>{
            return (<Workflow wfname={wf}/>)
          })
        }
        
    </div>
      
  );
}

export default WorkflowContainer;
