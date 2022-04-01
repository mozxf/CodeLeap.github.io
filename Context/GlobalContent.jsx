import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
    const [username, setUsername] = useState('')

    function saveUsername(user) {
        setUsername(user)
        localStorage.setItem("username", user)
    }

    const localUser = localStorage.getItem("username")
    useEffect(() => {
    if(localUser) {
        setUsername(localUser)
    }

    }, [localUser])
   

return <GlobalContext.Provider value={{username, saveUsername, setUsername}} >

    {children}
</GlobalContext.Provider>

}