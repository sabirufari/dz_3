import React, { useState } from 'react'

function Poisk() {
    const [text,setText]= useState()
  
    const handleClickSubmit=(e)=>{
        e.preventDefault()  
        setText(e.target.value)
        console.log(text)
    }


  return (
    <div>
        <form action="">
        <input type="text" name="poisk" id="poisk" onChange={handleClickSubmit}  style={{height:'40px'}}/>
        <button onSubmit={handleClickSubmit} onClick={handleClickSubmit}>get</button>
        </form>
    </div>
  )
}

export default Poisk