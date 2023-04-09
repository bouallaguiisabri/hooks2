import React, { useState } from 'react'
import { Rating} from 'react-simple-star-rating'


export function MyComponent({elm}) {
  const [rating, setRating] = useState(0)

 // Catch Rating value
 const handleRating = (rate) => {
  setRating(rate)
}


  return (
    <div className='App'>
      
      <Rating initialValue={elm.rating} allowHover={false}/>

      
    </div>
  );
}
export default MyComponent; 