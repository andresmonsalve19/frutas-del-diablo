import { Container } from "@mui/material";
import { favoriteFruits } from "../helpers/favoriteFruits";
import { SearchBar } from "../components/home/SearchBar";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { PageTitle } from "../common/PageTitle";

export const FavoriteFruits = () => {
    const myFavoriteFruits = favoriteFruits

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar />
            <FruitCardCreator data={myFavoriteFruits} />
        </Container>
    );
}; 
