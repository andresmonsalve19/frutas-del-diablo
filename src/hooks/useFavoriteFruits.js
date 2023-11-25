import { useContext } from "react";
import { FavoriteFruitsContext } from "../context/FavoriteFruitsContext";

export const useFavoriteFruits = () => {
    const context = useContext(FavoriteFruitsContext)

    if (context === undefined) {
        throw new Error('useFavoriteFruits must be used within a FavoriteFruitsProvider')
    }

    return (
        context
    );
}; 
