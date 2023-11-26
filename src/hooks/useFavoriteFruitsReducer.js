import { useReducer, useContext } from "react";
import { favoriteFruitsReducer } from "../reducers/favoriteFruitsReducer";
import { DataContext } from "../context/DataContext";

export const useFavoriteFruitsReducer = () => {

    const { myFruitsFavorite } = useContext(DataContext)
    const [state, dispatch] = useReducer(favoriteFruitsReducer, myFruitsFavorite);

    const addToFavoriteFruits = (fruit) => dispatch({
        type: 'ADD_TO_FAVORITE',
        payload: fruit,
    });

    const deleteFavoriteFruit = (fruit) => dispatch({
        type: 'DELETE_FAVORITE_FRUIT',
        payload: fruit,
    });

    return {
        state,
        addToFavoriteFruits,
        deleteFavoriteFruit
    }
};