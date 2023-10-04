import { Container, Typography } from "@mui/material";
import { HistoryCard } from "../components/fruit_history/HistoryCard";

export const FruitHistory = () => {
    return (
        <Container maxWidth="xl">
            <Typography variant="h2" textAlign="center" sx={{ p: 2, m: 4 }}>
                Historial de versiones y cambios
            </Typography>
            <HistoryCard fruitNameTitle="Fruta1" />
        </Container>
    );
};
