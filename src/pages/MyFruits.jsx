import { Container } from "@mui/material";
import { PageTitle, FruitCardCreator, SearchBar } from "../components";
import { createdFruits } from "../Data";
import { useFruitFilter } from "../hooks";

export const MyFruits = () => {
    const {fruitsFiltered, setTextFilter} = useFruitFilter(createdFruits)

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
};