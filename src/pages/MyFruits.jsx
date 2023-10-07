import { Container } from "@mui/material";
import { PageTitle } from "../common/PageTitle";
import { createdFruits } from "../helpers/createdFruits";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";
import { useState } from "react";

export const MyFruits = () => {
    let fruitsCreated = createdFruits
    const [textFilter, setTextFilter] = useState("")

    if (textFilter != "") {
        var newData = []
        fruitsCreated.map(function (i) {
            if (i["name"].toLowerCase().search(textFilter.toLowerCase()) != -1) {
                newData.push(i)
            }
        })
        fruitsCreated = newData
    }

    return (
        <Container maxWidth="xl">
            <PageTitle title="Mis Frutas" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={fruitsCreated} />
        </Container>
    );
};