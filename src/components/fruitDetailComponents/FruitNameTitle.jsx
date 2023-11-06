import { Grid, Typography } from "@mui/material";

export const FruitNameTitle = ({ name }) => {
    return (
        <Grid item container direction="row" justifyContent="center">
            <Grid item sx={{ mt: 4 }}>
                <Typography
                    sx={{
                        fontSize: {
                            xs: "1.2em",
                            sm: "1.5em",
                            md: "1.8em",
                            lg: "2em",
                        },
                    }}
                >
                    <b>Nombre:</b> {name}
                </Typography>
            </Grid>
        </Grid>
    );
};
