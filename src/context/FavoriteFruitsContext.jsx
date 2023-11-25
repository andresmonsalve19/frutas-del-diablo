import { useState } from "react";
import { createContext } from "react";

export const FavoriteFruitsContext = createContext();

export const FavoriteFruitsProvider = ({ children }) => {
    const [favoriteFruits, setFavoriteFruits] = useState([]);

    const addToFavoriteFruits = (favoriteFruit) => {
        // Verificar si la fruta ya está en favoritas
        const fruitInFavoritesIndex = favoriteFruits.findIndex(
            (item) => item.id === favoriteFruit.id
        );
        if (fruitInFavoritesIndex >= 0) {
            console.log("Esta fruta ya fue agregada a favorita");
            return;
        }
        setFavoriteFruits([...favoriteFruits, favoriteFruit]);
    };

    const deleteFavoriteFruit = (fruit) => {
        setFavoriteFruits(prevState => prevState.filter(item => item.id !== fruit.id))
    };

    return (
        <FavoriteFruitsContext.Provider
            value={{ favoriteFruits, addToFavoriteFruits, deleteFavoriteFruit }}
        >
            {children}
        </FavoriteFruitsContext.Provider>
    );
};
