import { Grid, Typography } from "@mui/material";

export const FruitResumeAttribute = ({ property, value }) => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            sx={{
                fontSize: 20,
                borderBottom: "1px solid",
                mt: {
                    xs: 1,
                    md: 0,
                },
                ml: {
                    xs: 4,
                    sm: 8,
                },
                mr: {
                    xs: 4,
                    sm: 8,
                },
                p: {
                    xs: 1,
                    sm: 2,
                    md: 1,
                },
                borderColor: "white",
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        xs: "0.7em",
                        sm: "0.8em",
                    },
                }}
            >
                <b>{property}:</b> {value}
            </Typography>
        </Grid>
    );
};
