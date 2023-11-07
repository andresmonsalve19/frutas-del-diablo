import { Grid } from "@mui/material";
import { FruitResumeAttribute } from "./fruitResumeComponents";

export const FruitResume = ({ fruit }) => {
    const { image, type, color, power, eater } = fruit;

    return (
        <Grid
            container
            item
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            sx={{ mt: 4 }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                    borderColor: "white",
                    textAlign: "center",
                }}
            >
                <img src={image} style={{ width: "250px", height: "150px" }} />
            </Grid>
            <Grid
                item
                container
                alignContent="center"
                alignItems="center"
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                    textAlign: "center",
                }}
            >
                <FruitResumeAttribute property="Tipo" value={type} />
                <FruitResumeAttribute property="Color" value={color} />
                <FruitResumeAttribute property="Poder" value={power} />
                <FruitResumeAttribute property="Consumidor" value={eater} />
            </Grid>
        </Grid>
    );
};
