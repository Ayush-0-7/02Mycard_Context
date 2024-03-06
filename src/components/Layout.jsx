import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react';

export const NameContext = createContext();
 
// Create a Context Provider
const NameContextProvider = ({ children }) => {
    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [email, setMail] = useState(undefined);


 
    return (
        <NameContext.Provider value={{ name, setName , age, setAge , email , setMail}}>
            {children}
        </NameContext.Provider>
    );
};

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <NameContextProvider>
        <Outlet/>
        </NameContextProvider>

    </div>
  )
}

export default Layout