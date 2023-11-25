import { Container } from "@mui/material";
import { SearchBar, FruitCardCreator, PageTitle } from "../components";
import { useFavoriteFruits, useFruitFilter } from "../hooks";

export const FavoriteFruits = () => {
    const {favoriteFruits} = useFavoriteFruits()
    const {fruitsFiltered, setTextFilter} = useFruitFilter(favoriteFruits);

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
}; 
