import React from 'react'

const RefreshButton = ({command}) => {
  return (
    <button className='text-white' onClick={command}>
      <span className='material-symbols-outlined'>sync</span>
    </button>
  )
}

export default RefreshButton
