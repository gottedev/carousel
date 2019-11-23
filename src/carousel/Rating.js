import React from 'react';

const Rating = ({starsToRender, count}) => {
  let starArray = [];
  for (let i=0; i<starsToRender; i++){
    starArray.push(i)
  };

  return(
    <div style={{display:'flex', alignItems:'center',
     lineHeight:"2px", margin:0,
     borderLeft:'5px solid transparent',
     borderRight:'5px solid transparent'
    }}
     >
    {starArray.map((item, i) => (
    <div key={i} style={{color:"gold", lineHeight:"2px"}}>
    <i className ="fas fa-star"></i>
    </div>
    )
  )}
  <div style={{display:'flex', lineHeight:"2px", marginLeft:'5px', color:'grey' }}>{count}</div>
  </div>
  )
}

export default Rating;