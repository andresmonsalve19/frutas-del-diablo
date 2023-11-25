import { useState, useEffect } from "react";
import { createContext } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    let [isAuth, setIsAuth] = useState(localStorage.getItem("session"))
    const [cacheFinish1, setCacheFinish1] = useState(false)
    const [allFruits, setAllFruits] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxMzA3NDMyLCJpYXQiOjE3MDA3MDI2MzIsImp0aSI6ImNjNDk2MWY4YTBmZTRhOWU4ZjdmOGIxMzcxNzBiOTI1IiwidXNlcl9pZCI6Mn0.w7qlv1prpf2hbhgvyOMoYPmfQYmcW-tLxDMkAPFwbKA"

    useEffect(() => {
        const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${token}` }};
        fetch(`http://127.0.0.1:8000/api/fruits/`, requestOptions)
            .then(res => res.json())
            .then(res => setAllFruits(res))
            .then(() => setCacheFinish1(true))
    }, [])

    return (
        <DataContext.Provider value={{
            isAuth,
            setIsAuth,
            cacheFinish1,
            allFruits
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataProvider