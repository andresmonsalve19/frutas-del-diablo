import { Container } from "@mui/material";
import { SearchBar, FruitCardCreator, PageTitle } from "../components";
import { useFavoriteFruits, useFruitFilter } from "../hooks";
import { DataContext } from "../context/DataContext";
import { useContext } from 'react'

export const FavoriteFruits = () => {
    const { myFruitsFavorite } = useFavoriteFruits()
    const { fruitsFiltered, setTextFilter } = useFruitFilter(myFruitsFavorite);

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter} />
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
}; 
