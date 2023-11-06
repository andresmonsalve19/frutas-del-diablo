import { Container, Typography } from "@mui/material";
import { HistoryItem } from "./HistoryItem";
import { fruitChagesHistory } from "../../Data";


const historyElements = fruitChagesHistory;

export const HistoryCard = ({fruitNameTitle}) => {
    return (
        <Container maxWidth="xl" >
            <Typography variant="h4" sx={{ m: 4, fontStyle: "italic" }}>
                {fruitNameTitle}
            </Typography>
            {historyElements.map((historyElement) => (
                    <HistoryItem
                        key={historyElement.id}
                        historyInfo={historyElement}
                    />
            ))}
        </Container>
    );
};
