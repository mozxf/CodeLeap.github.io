import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
    const [username, setUsername] = useState('')


return <GlobalContext.Provider value={{username, setUsername}} >

    {children}
</GlobalContext.Provider>

}