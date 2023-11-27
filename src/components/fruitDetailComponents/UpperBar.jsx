import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
    BsArrowLeftCircle,
    BsPencilSquare,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useFavoriteFruitsContext } from "../../hooks";
import { FavoriteFruitIcon } from "../fruitCardComponents";

export const UpperBar = ({ id }) => {
    const { isAuth } = useContext(DataContext);
    let { myFruitsFavorite } = useFavoriteFruitsContext();
    if (myFruitsFavorite["detail"] === 'Authorization header must contain two space-delimited values') {
        myFruitsFavorite = []
    }
    const isFruitInFavoriteFruits = myFruitsFavorite.some(
        (item) => item.id === Number(id)
    );

    return (
        <Grid
            item
            container
            direction="row"
            justifyContent={isAuth ? "center" : "flex-start"}
            alignItems="center"
            alignContent="center"
            sx={{ mt: 1, height: 70, ml: 4 }}
        >
            <Grid item xs={8} sm={9} sx={{ fontSize: 22 }}>
                <motion.p whileHover={{ scale: 0.99 }}>
                    <IconButton title="Ir atrás">
                        <Link to="/">
                            <BsArrowLeftCircle color="white" />
                        </Link>
                    </IconButton>
                </motion.p>
            </Grid>
            {
                isAuth == "true"
                    ? (
                        <>
                            <Grid
                                item
                                xs={2}
                                sm={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    fontSize: 22,
                                }}
                            >
                                <motion.p whileHover={{ scale: 0.9 }}>
                                    <Link to={`/editar-fruta/${id}`}>
                                        <BsPencilSquare color="white" />
                                    </Link>
                                </motion.p>
                            </Grid>
                            <FavoriteFruitIcon />
                        </>
                    )
                    : undefined
            }
        </Grid>
    );
};
