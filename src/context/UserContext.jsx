import React, { useState } from 'react'
import { createContext } from 'react'
import { HiMiniArrowUpTray } from 'react-icons/hi2'
import { toast } from 'react-toastify'
export const UserContext = React.createContext()
export const UserProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState("")


//register user
    const register_user = (name,email,password) => {
       
 fetch('http://localhost:3000/listings', {
  method: 'POST',
  body: JSON.stringify({
    name : name,
    email : email,
    password : password

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((res) =>{
    // navigate('/allproperties')
    if(res.success){
         toast.success(res.success)
    }
    else if(res.error){
      toast.error(res.error)
    }
    else {
      toast.error('Something went wrong !')
    }
   
  }
  );
    }


      //  useEffect(() => {
  //    fetch('http://localhost:3000/listings')
  //    .then((response) => response.json())
  //    .then((json) =>{
  //      setListings(json)
  //    } );
  //  },[])



    const contextData = {
        currentUser, 
        setCurrentUser,
        register_user
    }


    return (
        <UserContext.Provider value={{contextData}}>
            {children}
        </UserContext.Provider>
    )
}