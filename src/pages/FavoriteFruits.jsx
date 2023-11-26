import { Container } from "@mui/material";
import { SearchBar, FruitCardCreator, PageTitle } from "../components";
import { useArrayFilter, useFavoriteFruitsContext } from "../hooks";

export const FavoriteFruits = () => {
    const {favoriteFruits} = useFavoriteFruitsContext()
    const {arrayFiltered, setTextFilter} = useArrayFilter(favoriteFruits, "name");

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis frutas favoritas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={arrayFiltered} />
        </Container>
    );
}; 
