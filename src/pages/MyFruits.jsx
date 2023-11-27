import { Container } from "@mui/material";
import { PageTitle, FruitCardCreator, SearchBar } from "../components";
import { useArrayFilter } from "../hooks";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export const MyFruits = () => {

    const { myFruitsCreated } = useContext(DataContext)
    const { arrayFiltered, setTextFilter } = useArrayFilter(myFruitsCreated, "name")

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar filtering={setTextFilter} />
            <FruitCardCreator data={arrayFiltered} />
        </Container>
    );
};