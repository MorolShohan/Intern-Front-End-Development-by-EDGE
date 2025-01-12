import React, { useState } from 'react';

const componentName = (props) => {
    // const [number,setNumber]=useState(1)
    let callRef=useRef()
    let showRef=useRef()

    const call=async()=>{
        const user= await fetch('https://jsonplaceholder.typicode.com/posts')
        callRef.current= await user.json()
        alert('Data Called')
    }

    const Show=()=>{
        const us=callRef.current
        showRef.current.innerText=(us.map(useSyncExternalStore.id))                  //JSON.stringify(callRef.current)
    }

    return (
        
        <>
           <div>
                {/* <p>{number}</p>
                <button onClick={()=>setNumber(number)}></button> */}

                <p>{showRef}</p>
                <button onClick={call}>Call</button>
                <button>Show</button>

            </div> 
        </>
        
    );
};

export default componentName;

