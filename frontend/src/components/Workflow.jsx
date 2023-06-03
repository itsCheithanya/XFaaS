import React, { useState } from 'react';
import './Workflow.css';

function Workflow(props){
    const [arrow, setArrow]=useState("no")

    function handleOver(event){
        if(event.type === 'mouseover'){
            setArrow("yes")
        }else if(event.type === 'mouseout'){
            setArrow("no")
        }

    }

    return (
        <div className='wf' onMouseOver={handleOver} onMouseOut={handleOver}>
            
            <svg className={(arrow=="no")?'wfArrowDontShow':'wfArrowShow'}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
              
            <a href="">{props.wfname}</a>   
                 
        </div>
    )
}

export default Workflow