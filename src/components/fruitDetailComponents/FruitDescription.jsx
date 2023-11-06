import { Grid } from "@mui/material";

export const FruitDescription = ({descriptionFruit}) => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            sx={{ mb: 6 }}
        >
            <Grid
                item
                xs={0}
                style={{
                    padding: "40px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    fontSize: "16px",
                }}
            >
                {descriptionFruit}
            </Grid>
        </Grid>
    );
};
