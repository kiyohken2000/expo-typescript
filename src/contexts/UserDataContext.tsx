import React, { createContext, useState } from 'react'

interface Props {
  children: any | any[];
  userData: any;
  setUserData: any;
}

export const UserDataContext = createContext<Partial<Props>>({});

export const UserDataContextProvider = (props: any) => {
  const [userData, setUserData] = useState({})
  
  return (
    <UserDataContext.Provider
      value={{
        userData, setUserData
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  )
}