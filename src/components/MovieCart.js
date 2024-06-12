import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
function MovieCart({poster_path}) {
    
  return (
    <div className=' w-28 lg:w-48 rounded-lg hover:scale-y-125 hover:scale-x-125 hover:z-50 border   text-white z-20'>
        <img  className='rounded-lg contain-content' src={IMG_CDN_URL+ poster_path} alt='movie cart'></img>
    </div>
  )
}

export default MovieCart