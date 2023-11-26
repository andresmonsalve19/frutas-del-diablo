import { Container } from "@mui/material";
import { FruitCardCreator, PageTitle, SearchBar } from "../components";
import { fruitDetails } from "../Data";
import { useArrayFilter } from "../hooks";

export const Home = () => {
    const {arrayFiltered, setTextFilter} = useArrayFilter(fruitDetails, "name")

    return (
        <Container maxWidth="xl">
            <PageTitle title="Frutas del Diablo" variant="h1" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={arrayFiltered} />
        </Container>
    );
};