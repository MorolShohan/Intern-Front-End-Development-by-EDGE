// import React from 'react';

const hero = () => {
    let newRef=useref()
    const change=()=>{
        newRef.current.innerText="hello"
}

    return (
        <div>
            <p ref={newRef}></p>
            <button onClick={change}>Click</button>

        </div>
        
      
        
    );
};

export default hero;