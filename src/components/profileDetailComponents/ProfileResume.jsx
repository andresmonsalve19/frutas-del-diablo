import { Grid, Typography } from "@mui/material";

export const ProfileResume = ({numberOfCreatedFruits, numberOfLikes}) => {
    return (
        <Grid
            container
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            sx={{
                height: 100,
                mt: 4
            }}
        >
            <Grid
                container
                item
                flexDirection="column"
                sx={{ width: "50%", borderRight: "white 2px solid", p: 1 }}
            >
                <Grid item>
                    <Typography
                        sx={{ textAlign: "center" }}
                        variant="subtitle1"
                    >
                        Publicaciones
                    </Typography>
                </Grid>
                <Grid item sx={{mt:2}}>
                    <Typography sx={{ textAlign: "center" }} variant="body2">
                        {numberOfCreatedFruits}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item flexDirection="column" sx={{ width: "50%", p: 1 }}>
                <Grid item>
                    <Typography
                        sx={{ textAlign: "center" }}
                        variant="subtitle1"
                    >
                        Score
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ textAlign: "center" }} variant="body2">
                        {numberOfLikes}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
