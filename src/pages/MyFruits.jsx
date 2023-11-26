import { Container } from "@mui/material";
import { PageTitle, FruitCardCreator, SearchBar } from "../components";
import { useFruitFilter } from "../hooks";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export const MyFruits = () => {

    const { myFruitsCreated } = useContext(DataContext)
    myFruitsCreated.map((fruit) => {
        if (fruit["fruitimage_set"][0]["image"][0] === "/") {
            fruit["fruitimage_set"][0]["image"] = "http://localhost:8000" + fruit["fruitimage_set"][0]["image"]
        }
    })
    const { fruitsFiltered, setTextFilter } = useFruitFilter(myFruitsCreated)

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar filtering={setTextFilter} />
            <FruitCardCreator data={fruitsFiltered} />
        </Container>
    );
};