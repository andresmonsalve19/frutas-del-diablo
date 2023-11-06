import Grid from "@mui/material/Grid";
import {
    FruitDescription,
    FruitNameTitle,
    FruitResume,
    NavigateToHistory,
    UpperBar,
} from "../components";
import { useParams } from "react-router-dom";
import { fruitDetails } from "../Data";

export const FruitDetail = () => {
    const { fruitId } = useParams();
    const currentFruit = fruitDetails.find(
        (fruit) => fruit.id.toString() === fruitId
    );
    const { name, description_fruit } = currentFruit;

    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{
                    background: "black",
                    height: "100vh",
                    color: "white",
                    p: 1,
                    width: "100vw",
                    minWidth: 300,
                }}
            >
                <Grid
                    item
                    container
                    flexDirection="row"
                    justifyContent="center"
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    sx={{
                        background: "#1e1e1e",
                        mt: 0,
                        pb: 4,
                        minWidth: 300,
                        width: {
                            xs: 250,
                            md: 1800,
                        },
                    }}
                >
                    <UpperBar />
                    <FruitNameTitle name={name} />
                    <FruitResume fruit={currentFruit} />
                    <FruitDescription descriptionFruit={description_fruit} />
                    <NavigateToHistory />
                </Grid>
            </Grid>
        </>
    );
};
