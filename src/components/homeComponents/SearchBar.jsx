import { TextField, Grid } from "@mui/material";

export const SearchBar = ({ filtering }) => {
    return (
        <>
            <Grid
                style={{ marginTop: "60px", marginBottom: "60px" }}
                container
                direction="row"
                justifyContent="center"
            >
                <Grid item xs={12} sm={10} md={8}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Búsqueda"
                        variant="outlined"
                        onChange={(e) => filtering(e.target.value)}
                    />
                </Grid>
            </Grid>
        </>
    );
};
