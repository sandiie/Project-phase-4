import React from 'react'
import { useEffect, useState } from 'react'
import Main from '../components/Main'
import Listing from '../components/Listing'

export default function Home() {
   
  const [listings, setListings] = useState([])
  const [onDelete, setOnDelete] = useState()
   useEffect(() => {
     fetch('http://localhost:3000/listings')
     .then((response) => response.json())
     .then((json) =>{
       setListings(json)
     } );
   })
 
  return (
    <>
     {/* <Main/> */}
     {
      listings && listings.map((listing) => (
        <Listing key={listing.id} listing={listing} setOnDelete={setOnDelete}/>
      ))
     }
      
    </>
  )
}