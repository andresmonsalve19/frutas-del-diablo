import { Container } from "@mui/material";
import { SearchBar, FruitCardCreator, PageTitle } from "../components";
import { useFavoriteFruitsContext, useArrayFilter } from "../hooks";

export const FavoriteFruits = () => {
    const { myFruitsFavorite } = useFavoriteFruitsContext()
    const { arrayFiltered, setTextFilter } = useArrayFilter(myFruitsFavorite, "name");

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter} />
            <FruitCardCreator data={arrayFiltered} />
        </Container>
    );
}; 
