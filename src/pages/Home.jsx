import { Container } from "@mui/material";
import { FruitCardCreator, PageTitle, SearchBar } from "../components";
import { fruitDetails } from "../Data";
import { useFruitFilter } from "../hooks";

export const Home = () => {
    const {fruitsFiltered, setTextFilter} = useFruitFilter(fruitDetails)

    return (
        <Container maxWidth="xl">
            <PageTitle title="Frutas del Diablo" letiant="h1" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
};