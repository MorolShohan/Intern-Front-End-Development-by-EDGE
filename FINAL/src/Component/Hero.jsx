import { useRef } from "react";

const ComponentName =() =>{
    //let a=['Dhaka','Cumilla']
    /*let newRef=useRef()
    const change1=()=>{
        
       // newRef.current.innerText="Hello"
       newRef.current.classList.remove('text-success')
       newRef.current.classList.add('text-danger')
    }*/
    
    let newRef=useRef()
    const change2=()=>{
    
       newRef.current.src="https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter"
       newRef.current.setAttribute('height','500')
       newRef.current.setAttribute('width','300')

    }
    /*const change=(event)=>{
      
        // For not loading the page
        event.preventDefault()
        // Show alert message
        alert('Hello')
    }*/
    return (
    /*<form action="" onSubmit={change}>
       
        <input type="text" placeholder="Type your name"/>
        <button>Click</button>
    </form>*/

    /*<div>

    <h1  ref={newRef} className='text-success'>Hello</h1>
    <h1  ref={newRef} className='text-success'>Hello 2</h1>
 
    <button onClick={change1} className='text-success'>Click</button>
    </div>*/
    <div>
        <img ref={newRef} src="https://dummyjson.com/image/400x200/282828"></img>
        <button onClick={change2} >Click</button>

    </div>
    
        );
};

export default ComponentName

