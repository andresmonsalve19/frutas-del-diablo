import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from "@mui/material";

export const SignIn = () => {
    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid
                    item
                    sx={{
                        minWidth: 320,
                        p: 3,
                    }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography
                            sx={{
                                mt: 1,
                                mb: 1,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                            variant="h4"
                        >
                            Iniciar Sesion
                        </Typography>
                        <Box component="form">
                            <TextField
                                name="username"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Email"
                                sx={{ mt: 2, mb: 1.5 }}
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                sx={{ mt: 1.5, mb: 1.5 }}
                            />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 3, height: "4em" }}
                            >
                                Ingresar
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
