import { motion } from "framer-motion";
import { Grid, IconButton } from "@mui/material";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useFavoriteFruitsContext } from "../../hooks";
import { DataContext } from "../../context/DataContext";
import { useState } from 'react'

export const FavoriteFruitIcon = ({ fruit2 }) => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id')
    let name = urlParams.get('name')
    let description = urlParams.get('description')
    let type_l = urlParams.get('type_l')
    let color = urlParams.get('color')
    let power = urlParams.get('power')
    let consumer = urlParams.get('consumer')
    let image = urlParams.get('image')
    let description_short = urlParams.get('description_short')

    if (id === null) {
        id = fruit2["id"]
        name = fruit2["name"]
        description = fruit2["description"]
        description_short = fruit2["description_short"]
        type_l = fruit2["type_l"]
        color = fruit2["color"]
        power = fruit2["power"]
        consumer = fruit2["consumer"]
        image = fruit2["url"]
    }

    let fruit = { "id": id, "name": name, "description": description, "type_l": type_l, "color": color, "power": power, "consumer": consumer, "url": image, "description_short": description_short }
    let { myFruitsFavorite, addToFavoriteFruits, deleteFavoriteFruit } = useFavoriteFruitsContext()

    if (myFruitsFavorite["detail"] === 'Authorization header must contain two space-delimited values') {
        myFruitsFavorite = []
    }

    let [isFruitInFavoriteFruits, setIsFruitInFavoriteFruits] = useState(myFruitsFavorite.some(item => Number(item.id) === Number(id)))
    console.log(isFruitInFavoriteFruits)
    console.log(myFruitsFavorite)
    console.log(id)

    function addFavorite(id) {
        const requestOptions = { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("access_token")}` } }
        fetch(`http://localhost:8000/api/fruits/${id}/favorite/`, requestOptions)

        addToFavoriteFruits(fruit)
        setIsFruitInFavoriteFruits(true)
    }

    function deleteFavorite(id) {
        const requestOptions = { method: 'DELETE', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("access_token")}` } }
        fetch(`http://localhost:8000/api/fruits/${id}/favorite/`, requestOptions)

        deleteFavoriteFruit(fruit)
        setIsFruitInFavoriteFruits(false)
    }

    return (
        <Grid item>
            <motion.h1 whileHover={{ scale: 0.9 }}>
                <IconButton
                    title="Agregar esta fruta a Favoritas"
                    onClick={() => isFruitInFavoriteFruits ? deleteFavorite(id) : addFavorite(id)}
                >
                    {
                        isFruitInFavoriteFruits
                            ? <BsFillHeartFill style={{ fontSize: 22, color: "white" }} />
                            : <BsHeart style={{ fontSize: 22, color: "white" }} />
                    }
                </IconButton>
            </motion.h1>
        </Grid>
    );
};
