import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
function MovieCart({poster_path}) {
    
  return (
    <div className='w-48 text-white z-50'>
        <img src={IMG_CDN_URL+ poster_path} alt='movie cart'></img>
    </div>
  )
}

export default MovieCart