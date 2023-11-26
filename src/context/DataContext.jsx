import { useState, useEffect } from "react";
import { createContext } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

    let [isAuth, setIsAuth] = useState(localStorage.getItem("session"))
    const [cacheFinish1, setCacheFinish1] = useState(false)
    const [allFruits, setAllFruits] = useState([])
    const [myFruitsCreated, setMyFruitsCreated] = useState([])
    const [myFruitsFavorite, setMyFruitsFavorite] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxMzA3NDMyLCJpYXQiOjE3MDA3MDI2MzIsImp0aSI6ImNjNDk2MWY4YTBmZTRhOWU4ZjdmOGIxMzcxNzBiOTI1IiwidXNlcl9pZCI6Mn0.w7qlv1prpf2hbhgvyOMoYPmfQYmcW-tLxDMkAPFwbKA"

    useEffect(() => {
        const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } };
        fetch(`http://127.0.0.1:8000/api/fruits/`, requestOptions)
            .then(res => res.json())
            .then(res => setAllFruits(res))
            .then(() => setCacheFinish1(true))
    }, [])

    useEffect(() => {
        try {
            let id = { "user_id": localStorage.getItem("id") }
            const requestOptions = { method: 'POST', headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}`, 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(id) };
            fetch(`http://127.0.0.1:8000/api/fruits/created_by/`, requestOptions)
                .then(res => res.json())
                .then(res => setMyFruitsCreated(res))
        } catch (error) {
            setMyFruitsCreated([])
        }
    }, [isAuth])

    useEffect(() => {
        try {
            const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}`, 'Accept': 'application/json', 'Content-Type': 'application/json' } };
            fetch(`http://localhost:8000/api/fruits/my_favourites/`, requestOptions)
                .then(res => res.json())
                .then(res => setMyFruitsFavorite(res))
        } catch (error) {
            setMyFruitsFavorite([])
        }
    }, [isAuth])

    return (
        <DataContext.Provider value={{
            isAuth,
            setIsAuth,
            cacheFinish1,
            allFruits,
            myFruitsCreated,
            myFruitsFavorite,
            setMyFruitsFavorite
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataProvider