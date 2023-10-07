import { Container } from "@mui/material";
import { PageTitle } from "../common/PageTitle";
import { createdFruits } from "../helpers/createdFruits";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";

export const MyFruits = () => {
    const fruitsCreated = createdFruits

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar />
            <FruitCardCreator data={fruitsCreated} />
        </Container>
    );
};