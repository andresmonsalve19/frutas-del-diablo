import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SignIn = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const dataLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
        navigate("/")
    };

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
                        <Box component="form" onSubmit={onSubmit}>
                            <TextField
                                name="username"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Email"
                                onChange={dataLogin}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                onChange={dataLogin}
                                sx={{ mt: 1.5, mb: 1.5 }}
                                required
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 3, height: "4em" }}
                            >
                                <Typography>Ingresar</Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
