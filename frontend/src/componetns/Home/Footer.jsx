import { useState, useEffect } from "react"
import React from 'react'

const Footer = () => {
  const [seconds, setSeconds] = useState(15)

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
    <footer className="flex justify-left">
      <div>
        <h1 className='text-white text-center items-center text-1xl ml-2'>Ukraine's Alarms Map</h1>
        <h1 className="text-white text-center items-center text-1xl ml-2">Update in {seconds}</h1>
      </div>
    </footer>
  )
}

export default Footer
