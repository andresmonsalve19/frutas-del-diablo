import Grid from "@mui/material/Grid";
import { FruitCard } from "./FruitCard";

export const FruitCardCreator = ({ data }) => {
    let i = -1;

    return (
        <>
            <Grid
                container
                flexDirection="row"
                justifyContent="center"
                alignContent="center"
            >
                {data.map((json) => {
                    i += 1;
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={json.id}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <FruitCard key={json.id} json={json} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
