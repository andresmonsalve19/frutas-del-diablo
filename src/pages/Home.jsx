import { Container } from "@mui/material";
import { FruitCardCreator } from "../components/fruitDetailsPage/FruitCardCreator";
import { SearchBar } from "../components/home/SearchBar";
import { fruitDetails } from "../helpers/fruitDetails";
import { PageTitle } from "../common/PageTitle";
import { useState } from "react";

export const Home = () => {
    let data = fruitDetails;
    const [textFilter, setTextFilter] = useState("")

    if (textFilter != "") {
        let newData = []
        data.map(function (i) {
            if (i["name"].toLowerCase().search(textFilter.toLowerCase()) != -1) {
                newData.push(i)
            }
        })
        data = newData
    }

    return (
        <Container maxWidth="xl">
            <PageTitle title="Frutas del Diablo" letiant="h1" />
            <SearchBar filtering={setTextFilter}/>
            <FruitCardCreator data={data} />
        </Container>
    );
};