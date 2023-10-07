import { Container } from "@mui/material";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";
import { fruitDetails } from "../helpers/fruitDetails";
import { PageTitle } from "../common/PageTitle";

export const Home = () => {
    const data = fruitDetails;

    return (
        <Container maxWidth="xl">
            <PageTitle title="Frutas del Diablo" variant="h1" />
            <SearchBar />
            <FruitCardCreator data={data} />
        </Container>
    );
};
