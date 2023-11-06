import { Grid, Typography } from "@mui/material";

export const FruitDescription = ({ descriptionFruit }) => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            sx={{ mt: 4, mb: 6 }}
        >
            <Grid
                item
                xs={12}
                sx={{
                    mt: 4,
                    ml: {
                        xs: 4,
                        sm: 8,
                    },
                    mr: {
                        xs: 4,
                        sm: 8,
                    },
                }}
            >
                <Typography
                    sx={{
                        textAlign: "justify",
                        fontSize: { xs: "0.8em", sm: "1em", md: "1.2em" },
                    }}
                >
                    {descriptionFruit}
                </Typography>
            </Grid>
        </Grid>
    );
};
