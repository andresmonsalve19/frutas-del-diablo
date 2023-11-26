import { useReducer } from "react";
import { favoriteFruitsReducer } from "../reducers/favoriteFruitsReducer";

const initialState = [];

export const useFavoriteFruitsReducer = () => {
    const [state, dispatch] = useReducer(favoriteFruitsReducer, initialState);

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
