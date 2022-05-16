import React from 'react'

const Error = ({children}) => {
  return (
        <div className="bg-red-700 text-white text-center p-3 font-bold m-3 rounded-lg">
          <p>{children}</p>
        </div> 
  )
}

export default Error