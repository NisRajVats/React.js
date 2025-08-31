import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-grey-700  '>
        User ID : {userid} 
    </div>
  )
}

export default User
