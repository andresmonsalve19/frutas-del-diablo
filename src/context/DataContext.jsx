import { useState, useEffect } from "react";
import { createContext } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <DataContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataProvider