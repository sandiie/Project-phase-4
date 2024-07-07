import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Listing({listing}) {

  
  return (
    <Link to={`/individualproperty/${listing.id}`}>
        <div className='border p-3' key={listing.id}>
          <img className='w-full h-[50vh] object-cover' src={listing.image} alt="" />
          <h2 className='text-xl font-semibold'>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>{listing.price}</p>
          <p>{listing.address}</p>
         
        
        </div>
    </Link>
  )
}
