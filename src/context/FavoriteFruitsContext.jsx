import { createContext } from "react";
import { useFavoriteFruitsReducer } from "../hooks/useFavoriteFruitsReducer";

export const FavoriteFruitsContext = createContext();

export const FavoriteFruitsProvider = ({ children }) => {
    const {state, addToFavoriteFruits, deleteFavoriteFruit} = useFavoriteFruitsReducer()

    return (
        <FavoriteFruitsContext.Provider
            value={{ favoriteFruits: state, addToFavoriteFruits, deleteFavoriteFruit }}
        >
            {children}
        </FavoriteFruitsContext.Provider>
    );
};
