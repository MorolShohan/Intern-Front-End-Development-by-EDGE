import React, { useRef } from 'react';

const Cbd = () => {
//     let newRef=useref()
//     const change=()=>{
//         newRef.current.innerText="hello"
// };

    // let newCol=()=>{
    //     newCol.current.classList.remove('text-success')
    //     newCol.current.classList.add('text-denger')
    // }
    newRef=useRef()
    const change=()=>
        newRef.current.src=""
        newRef.current.setAttribute()
        newRef.current.setAttribute()
    return (
        <div>
            <h1 class='text-success'>Home Page</h1>
            <p ></p> {}
            <button onClick={change}>Click</button> {}

        </div>

    );
};
export default Cbd;