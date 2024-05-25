import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSujjestion from './GptSujjestion'

function GptView() {
  return (
    <div className='absolute -z-20'>
  <GptSearchBar/>
  <GptSujjestion/>
    </div>
  )
}

export default GptView