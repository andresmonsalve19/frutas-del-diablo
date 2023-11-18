import { useState, useEffect } from "react";
import { createContext } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false)
    const [cacheFinish1, setCacheFinish1] = useState(false)
    const [allFruits, setAllFruits] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNjIzNjA5LCJpYXQiOjE3MDAwMTg4MDksImp0aSI6IjBhZmJjNjc1NjU5MTRkMTk5NjUxMjY5N2Q4ZWMwZjg4IiwidXNlcl9pZCI6Mn0.wp0msygOu1-NLIrTkHfdqEx4tNXyMFuIFOGPFKlw-qs"

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