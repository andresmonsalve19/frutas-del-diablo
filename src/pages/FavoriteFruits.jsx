import { Container } from "@mui/material";
import { favoriteFruits } from "../Data";
import { SearchBar, FruitCardCreator, PageTitle } from "../components";
import { useFruitFilter } from "../hooks";

export const FavoriteFruits = () => {
    const {fruitsFiltered, setTextFilter} = useFruitFilter(favoriteFruits);

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
}; 
