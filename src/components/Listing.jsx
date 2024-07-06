import React from 'react'
import { toast } from 'react-toastify'

export default function Listing({listing, setOnDelete}) {

    const handleDelete = (id) => {
       fetch(`http://localhost:3000/listings/${id}`, {
        method: 'DELETE',
})
  .then(response => response.json())
  .then((response) => {
    setOnDelete(id)
      toast.success('Listing deleted successfully !')
  })
    }
  return (
    <div>
        <div className='border p-3' key={listing.id}>
          <h2 className='text-xl font-semibold'>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>{listing.price}</p>
          <p>{listing.imageUrl}</p>
          {/* {
            <p>{listing.category.name}</p>
          }
          {
            <p>{listing.createdBy.name}</p>
          }
          <div className='bg-gray-100 p-4'>
            <h3 className='text-lg font-semibold'>Reviews{listing.reviews.length}</h3>
            {
            listing && listing.reviews && listing.reviews.map((review) => (
              <div className='p-2 bg-slate-600 mt-2' key={review.id}>
                <p>{review.rating}</p>
                <p>{review.comment}</p>
                <p>{review.date}</p>
              </div>
            ))
          }
          </div> */}
          <button onClick={() => handleDelete(listing.id)} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        </div>
    </div>
  )
}
