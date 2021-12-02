import React from 'react'

function Picture() {
    const fame=(localStorage.getItem("photo"))?
    (localStorage.getItem("photo")):''
    console.log(fame,'fame')
    return (
        <div>
           
           <img src={fame} alt='pictor'/>
           
           
        </div>
    )
}

export default Picture;
