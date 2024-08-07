import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';


export default function Register() {
    const {register_user} = useContext(UserContext)


  return (
    
 
    


    <div>
 
<div className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-blue-600 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://img.freepik.com/free-photo/beautiful-outdoor-swimming-pool-with-sea-ocean-white-cloud-blue-sky_74190-8835.jpg?t=st=1720520322~exp=1720523922~hmac=399b7ae67ce37931aa3484d0fd54c8d2c99814744f6cb228d840713017b7d0e7&w=900"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
         
        </a>

        <h2 className="mt-6 text-5xl text-center font-extrabold  text-white sm:text-3xl md:text-4xl">
          Welcome to Horizon Homes 
        </h2>

        <p className="mt-4 leading-relaxed text-white font-bold">
           Join our community and gain access to exclusive real estate listings, expert advice, and the latest market trends. 
  Create an account to start your journey towards finding your dream property with us.
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
          
          </a>

          <h1 className="mt-2 text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
            Welcome to Horizon Homes
          </h1>

          <p className="mt-4 leading-relaxed text-blue-500">
            Join our community and gain access to exclusive real estate listings, expert advice, and the latest market trends. 
  Create an account to start your journey towards finding your dream property with us.
          </p>
        </div>
       <h1 className="mt-6 text-5xl text-center font-extrabold  text-blue-600 sm:text-3xl md:text-4xl pr-10 pb-20" > Register your account</h1>
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
         
          <div className="col-span-6 ">
            <label htmlFor="LastName" className="block text-sm font-medium text-blue-500">
             Username
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
               class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-full focus:outline-none  hover:border-blue-500 border-2"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-blue-600"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
             class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-full focus:outline-none  hover:border-blue-500 border-2"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-blue-600"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
             class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-full focus:outline-none  hover:border-blue-500 border-2"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-blue-600">
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              class="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-full focus:outline-none  hover:border-blue-500 border-2"
            />
          </div>

          
          
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border w-full border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

           
          </div>
        </form>
      </div>
    </main>
  </div>

  <section/>
  
</div>
</div>
  )
}
