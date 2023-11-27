import Grid from "@mui/material/Grid";
import { FruitDescription, FruitNameTitle, FruitResume, NavigateToHistory, UpperBar } from "../components";
import { useParams } from "react-router-dom";

export const FruitDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id')
    let name = urlParams.get('name')
    let description = urlParams.get('description')
    let type_l = urlParams.get('type_l')
    let color = urlParams.get('color')
    let power = urlParams.get('power')
    let consumer = urlParams.get('consumer')
    let image = urlParams.get('image').replace('¡','&')

    console.log(image)

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
                    <UpperBar id={id} />
                    <FruitNameTitle name={name} />
                    <FruitResume image={image} type={type_l} color={color} power={power} eater={consumer} />
                    <FruitDescription descriptionFruit={description} />
                    <NavigateToHistory />
                </Grid>
            </Grid>
        </>
    );
};
