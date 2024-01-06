"use client"


import {createContext, useState} from "react";

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    return <GlobalContext.Provider value={{isActive, setIsActive}}>
        {children}
    </GlobalContext.Provider>
}
