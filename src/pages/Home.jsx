import React from 'react'
import { useEffect, useState } from 'react'
import Main from '../components/Main'
import Listing from '../components/Listing'

import ReactPaginate from 'react-paginate';

export default function Home() {
   
  const [listings, setListings] = useState([])
  const [onDelete, setOnDelete] = useState()
   useEffect(() => {
     fetch('http://localhost:3000/listings')
     .then((response) => response.json())
     .then((json) =>{
       setListings(json)
     } );
   },[])
 

   //React pagination
  
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching listings from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 3;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = listings.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(listings.length / 3);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % listings.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }
   

  return ( 
    <>
     {/* <Main/> */}
<div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
  
  
  
   {
      currentItems && currentItems.map((listing) => (
        <Listing key={listing.id} listing={listing} setOnDelete={setOnDelete}/>
      ))
    }

     
  </div>     
   <div className='flex flex-row bg-slate-300 justify-center'>
     <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        containerClassName='flex gap-4'
        activeClassName='text-red-700 font-bold'
      
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
   </div>
      
    </>
  )
}