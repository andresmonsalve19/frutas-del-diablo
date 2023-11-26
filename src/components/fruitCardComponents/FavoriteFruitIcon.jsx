import { motion } from "framer-motion";
import { Grid, IconButton } from "@mui/material";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useFavoriteFruitsContext } from "../../hooks";

export const FavoriteFruitIcon = ({fruit}) => {
    const {favoriteFruits, addToFavoriteFruits, deleteFavoriteFruit} = useFavoriteFruitsContext()
    const isFruitInFavoriteFruits = favoriteFruits.some(item => item.id === fruit.id)

    return (
        <Grid item>
            <motion.h1 whileHover={{ scale: 0.9 }}>
                <IconButton
                    title="Agregar esta fruta a Favoritas"
                    onClick={() => isFruitInFavoriteFruits ? deleteFavoriteFruit(fruit) : addToFavoriteFruits(fruit) }
                >
                    {
                        isFruitInFavoriteFruits 
                        ? <BsFillHeartFill style={{ fontSize: 22, color: "white" }}/>
                        : <BsHeart style={{ fontSize: 22, color: "white" }} />
                    }   
                </IconButton>
            </motion.h1>
        </Grid>
    );
};
