import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Listing({listing}) {

  
  return (
    <Link >
        <div className='bg-white my-[4rem] flex justify-center items-center flex-col relative hover:scale-105 transition duration-500 cursor-pointer' key={listing.id}>
        <img src={listing.image} alt="" className='w-[22.5rem] h-[24rem] rounded-[1.25rem]'/>

        <div className='bg-white flex items-center justify-between w-[20rem] h-[7.5rem] px-[1.38rem] rounded-[1.25rem] shadow-md absolute bottom-[-3.5rem] max-xs:w-[17rem]'>
           <div className='flex flex-col justify-between gap-1'>
              <p className='text-[1.50rem] font-semibold max-xs:text-[1.4rem]'>{listing.title}</p>
              <p className='text-[1.3rem] font-semibold text-blue-600 max-xs:text-[1.2rem]'> Ksh {listing.price}</p>
            </div>
           <Link  to={`/individualproperty/${listing.id}`}   className='bg-blue-600 text-white font-semibold rounded-[1.5rem] py-3 px-7 hover:text-[var(--mainBlue)] hover:bg-white hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400 max-xs:'>Details</Link>
           
        </div>
    </div>
        
    
    </Link>
  )
}

