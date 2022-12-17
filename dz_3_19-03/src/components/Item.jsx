import React from 'react'

function Item(props) {
  return (
    <div className='box'>
        <img src={props.good?.url} alt="" style={{width:'50%',height:'50%',}} />

        <div className='content'> 
          <h1 className='cl'>{props.good?.name} </h1>
          <h2 className='cl2'>{props.good?.praice}</h2>
          <img src="https://oborot.ru/wp-content/uploads/2020/12/screenshot_79-1024x700.png" alt=""  style={{width:'40px', height:'40px'}}/>
        </div>
    </div>
    
  )
}

export default Item