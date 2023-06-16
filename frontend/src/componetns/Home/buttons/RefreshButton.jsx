import React, {useState} from 'react'
import Loader from '../UI/Loader'


const RefreshButton = ({command}) => {
  const [showLoading, setShowLoading] = useState(false)

  const refresh = () => {
    command()
    setShowLoading(true)
    setTimeout(() => {
        setShowLoading(false)
    }, 1000)
  }

  return (
    <button onClick={refresh} className='text-white'>
      <span className='material-symbols-outlined'>sync</span>
      {showLoading && <Loader />}
    </button>
  )
}

export default RefreshButton
