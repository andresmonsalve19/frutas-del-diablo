export const favoriteFruitsReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_FAVORITE': {
            // Verificar si la fruta ya está en favoritas
            const { id } = payload
            const fruitInFavoritesIndex = state.findIndex(
                (item) => item.id === id
            );
            if (fruitInFavoritesIndex >= 0) {
                console.log("Esta fruta ya fue agregada a favorita");
                return;
            }
            return [...state, { ...payload }]
        }
        case 'DELETE_FAVORITE_FRUIT': {
            const { id } = payload
            return state.filter(item => item.id !== id)
        }
    }
};