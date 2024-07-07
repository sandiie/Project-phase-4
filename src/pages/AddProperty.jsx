import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function AddProperty() {

  const navigate = useNavigate();
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [address, setAddress] = useState()
  const [image, setImage] = useState()

function handleSubmit(e){
  
  e.preventDefault()

 fetch('http://localhost:3000/listings', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    description: description,
    price: price,
    address:address,
    image: image,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((res) =>{
    navigate('/allproperties')
    toast.success('Listing added successfully !')
  }
  );
}
  return (
    <div className='grid grid-cols-2 h-[80vh] bg-sky-900 mt-6'>
      <div className='bg-cyan-500 text-white flex justify-center items-center'>
         <h1 className='text-6xl font-bold'>Add new Property</h1>
      </div>
      <div className=' p-6'>
         <h1 className='text-3xl text-white font-semibold text-center'>Add Property</h1>
         <form onSubmit={handleSubmit} className=' max-w-md mx-auto '>
          <div className='relative z-0 W-full mb-5 group'>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the title of your property'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the description of your property'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
            
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the price of your property'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
               value={address}
               onChange={(e)=>setAddress(e.target.value)}            
              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly enter the address of your property'
              required
            />
          </div>

          <div className='mb-5'>
            <textarea
              value={image}
              onChange={(e)=>setImage(e.target.value)}

              type='text'
              className='block w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm'
              placeholder='kindly add the image of the property'
              required
            />
          </div>

          <button type='submit' className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'>
            Add post
          </button>
        </form>
      </div>

    
    </div>
  )
}