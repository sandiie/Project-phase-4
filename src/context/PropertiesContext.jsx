import React, { useState } from 'react'
import { createContext } from 'react'
export const PropertyContext = React.createContext()
export const PropertyProvider = ({children}) => {


    const [currentProperty, setCurrentProperty] = useState("")



    const register_Property = () => {
        setCurrentProperty()
    }

    const contextData = {
        currentProperty, 
        setCurrentProperty,
        register_Property
    }


    return (
        <PropertyContext.Provider value={{contextData}}>
            {children}
        </PropertyContext.Provider>
    )
}