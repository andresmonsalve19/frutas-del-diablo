import { Container } from "@mui/material";
import { HistoryCard, PageTitle } from "../components";

export const FruitHistory = () => {
    return (
        <Container maxWidth="xl">
            <PageTitle title="Historial de versiones y cambios" variant="h3" />
            <HistoryCard fruitNameTitle="Fruta1" />
        </Container>
    );
};
