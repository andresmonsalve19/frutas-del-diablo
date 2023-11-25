import { Container } from "@mui/material";
import { FruitCardCreator, PageTitle, SearchBar } from "../components";
import { DataContext } from "../context/DataContext";
import { fruitDetails } from "../Data";
import { useFruitFilter } from "../hooks";
import { useContext } from "react";

export const Home = () => {

    const { allFruits } = useContext(DataContext)
    const { fruitsFiltered, setTextFilter } = useFruitFilter(allFruits)
    
    return (
        <Container maxWidth="xl">
            <PageTitle title="Frutas del Diablo" letiant="h1" />
            <SearchBar filtering={setTextFilter} />
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );

};