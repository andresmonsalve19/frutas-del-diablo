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
                    backgroundColor: "black",
                    height: "100%",
                    color: "white",
                    p: 1,
                    width: "100%",
                    minWidth: 300
                }}
            >
                <Grid
                    item
                    container
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    sx={{ background: "#1e1e1e", pb: 4, minWidth: 300, width: 600}}
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
