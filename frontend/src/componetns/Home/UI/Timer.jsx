import React, { useEffect, useState } from 'react'

const Timer = ({children}) => {
  const [seconds, setSeconds] = useState()

  useEffect(() => {
    if (seconds > -1) {
        const timer = setTimeout(() => {
            setSeconds(seconds - 1)
        }, 1000)
        return () => clearTimeout(timer)
    } else {
        setSeconds(15)
    }
  }, [seconds])

  return (
    <h1 className="flex text-white text-center items-center text-1xl ml-2" >Update in {seconds} {children}</h1>
  )
}

export default Timer
