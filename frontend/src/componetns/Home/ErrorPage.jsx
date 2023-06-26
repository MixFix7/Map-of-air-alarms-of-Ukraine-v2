import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-4xl text-white'>ERROR {error.status}</h1>
      <div>
        <h2 className='text-4xl text-white'> {error.statusText}</h2>
      </div>
    </div>
  )
}

export default ErrorPage
