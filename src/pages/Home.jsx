import { Container, Typography } from "@mui/material";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";
import { fruitDetails } from "../helpers/fruitDetails";

export const Home = () => {
    const data = fruitDetails

    return (
        <Container maxWidth="xl">
            <Typography variant="h1" textAlign="center" >Home Page</Typography>
            <SearchBar/>
            <FruitCardCreator data={data}/>
        </Container>
    );
}; 
