import { useState, useEffect } from "react"
import React from 'react'
import Timer from './UI/Timer';

const Footer = ({children}) => {


  return (
    <footer className="flex justify-left">
      <div>
        <h1 className='text-white text-center items-center text-1xl ml-2'>Ukraine's Alarms Map</h1>
        {children}
      </div>
    </footer>
  )
}

export default Footer
