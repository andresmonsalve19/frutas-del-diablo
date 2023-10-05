import { Container } from "@mui/material";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";
import { fruitDetails } from "../helpers/fruitDetails";

export const HomeInit = () => {

    const data = fruitDetails

    return (
        <Container maxWidth="xl">
            <SearchBar/>
            <FruitCardCreator data={data}/>
        </Container>
    );
}; 