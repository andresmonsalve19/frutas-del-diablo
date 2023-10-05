import { TextField, Grid } from "@mui/material";

export const SearchBar = () => {
    return (
        <>
            <Grid
                style={{ marginTop: "60px", marginBottom: "60px" }}
                container
                direction="row"
                justifyContent="center"
            >
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Búsqueda"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </>
    );
};
