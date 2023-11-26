import { Container } from "@mui/material";
import { PageTitle, FruitCardCreator, SearchBar } from "../components";
import { createdFruits } from "../Data";
import { useArrayFilter } from "../hooks";

export const MyFruits = () => {
    const {arrayFiltered, setTextFilter} = useArrayFilter(createdFruits, "name")

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={arrayFiltered} />
        </Container>
    );
};