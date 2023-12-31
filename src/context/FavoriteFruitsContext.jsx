import { createContext } from "react";
import { DataContext } from "../context/DataContext";
import { useContext } from 'react'

export const FavoriteFruitsContext = createContext();

export const FavoriteFruitsProvider = ({ children }) => {
    const { myFruitsFavorite } = useContext(DataContext)
    const { setMyFruitsFavorite } = useContext(DataContext)

    function addToFavoriteFruits(fruit) {
        const fruitInFavoritesIndex = myFruitsFavorite.findIndex(
            (item) => item.id === fruit.id
        );
        if (fruitInFavoritesIndex >= 0) {
            return;
        }
        setMyFruitsFavorite([...myFruitsFavorite, fruit])

    }

    function deleteFavoriteFruit(fruit) {
        setMyFruitsFavorite(myFruitsFavorite.filter(item => Number(item.id) !== Number(fruit.id)))
    }

    return (
        <FavoriteFruitsContext.Provider
            value={{ myFruitsFavorite, addToFavoriteFruits, deleteFavoriteFruit }}
        >
            {children}
        </FavoriteFruitsContext.Provider>
    );
};