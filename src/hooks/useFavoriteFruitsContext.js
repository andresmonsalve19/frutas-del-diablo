import { useContext } from "react";
import { FavoriteFruitsContext } from "../context/FavoriteFruitsContext";

export const useFavoriteFruitsContext = () => {
    const context = useContext(FavoriteFruitsContext)

    if (context === undefined) {
        throw new Error('useFavoriteFruitsContext must be used within a FavoriteFruitsProvider')
    }

    return (
        context
    );
}; 
