import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Upload() {
    const submithandler=()=>{
        
        localStorage.setItem("photo",image);
    }
    
        const [image,setImage]=useState(null)
  const clickHandler=(e)=>{
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  
  return (
    <div>
    <input type='file'  onChange={clickHandler}/>
   
    <Link to="/screen"><button onClick={submithandler} >upload</button></Link>
            
        </div>
    )
}

export default Upload
