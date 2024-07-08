import React from 'react'
import { useEffect, useState } from 'react'
import Main from '../components/Main'
import Listing from '../components/Listing'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


export default function Home() {
   return (
    <>
     <div
  className="background-img w-full h-screen flex justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004020.jpg?t=st=1720431412~exp=1720435012~hmac=6c1d022b8be1c37225476716d5a6faba5d9f711613d69710d54ce993c2af9628&w=1380')" }}
>
  <div className="w-[80%] h-min flex flex-col items-start z-0 text-[var(--smoothWhite)] leading-auto mt-[10rem] select-none max-sm:mt-[8rem] max-xs:items-center max-xs:text-center ">
    <h1 className="text-[4.5rem] font-bold max-sm:text-[2.5rem] max-md:text-[3.3rem] max-lg:text-[4.2rem]  text-white">
      Home That Makes
    </h1>
    <h1 className="text-[4.5rem] font-bold max-sm:text-[2.5rem] max-md:text-[3.3rem] max-lg:text-[4.2rem]  text-white">
      You Living Life!
    </h1>
    <p className="text-[1.1rem] w-[48%] font-medium max-lg:w-[60%] max-sm:w-[70%] max-sm:text-[0.9rem]  text-white">
      Are you looking for amazing Real estate? Don't worry! we got it for you
    </p>
    <Link to="/allproperties">
      <button className="bg-white text-[1.1rem] font-semibold rounded-full py-[.63rem] px-[1.9rem] mt-[1.5rem] hover:text-[var(--mainBlue)] hover:bg-blue-500 hover:shadow-md hover:shadow-[var(--mainBlue)] transition duration-400">
       All Properties
      </button>
    </Link>
  </div>
</div>


    </>
   )
  
}