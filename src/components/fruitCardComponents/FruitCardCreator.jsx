import Grid from "@mui/material/Grid";
import { FruitCard } from "./FruitCard";
import { Link } from "react-router-dom";

export const FruitCardCreator = ({ data }) => {
    let i = -1;

    return (
        <>
            <Grid container direction="row" justifyContent="center">
                {data.map((json) => {
                    i += 1;
                    return (
                        <Grid
                            item
                            xs={5.5}
                            sm={5.2}
                            md={4}
                            lg={3.55}
                            xl={2.7}
                            key={json.id}
                            style={{ marginBottom: "80px" }}
                        >
                            <Link
                                key={json.id}
                                to={`/fruta/${json.id}`}
                            >
                                <FruitCard
                                    key={json.id}
                                    name={json.name}
                                    image={json.image}
                                    description={json.description_card}
                                />
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
