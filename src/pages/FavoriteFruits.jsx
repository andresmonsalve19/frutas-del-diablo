import { Container } from "@mui/material";
import { favoriteFruits } from "../helpers/favoriteFruits";
import { SearchBar } from "../components/home/SearchBar";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { PageTitle } from "../common/PageTitle";
import { useState } from "react";

export const FavoriteFruits = () => {
    let myFavoriteFruits = favoriteFruits
    const [textFilter, setTextFilter] = useState("")

    if (textFilter != "") {
        var newData = []
        myFavoriteFruits.map(function (i) {
            if (i["name"].toLowerCase().search(textFilter.toLowerCase()) != -1) {
                newData.push(i)
            }
        })
        myFavoriteFruits = newData
    }

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={myFavoriteFruits} />
        </Container>
    );
}; 
