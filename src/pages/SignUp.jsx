import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        names: "",
        lastNames: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const setData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <Container maxWidth="md">
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
                            Registro
                        </Typography>
                        <Box
                            component="form"
                            sx={{ pl: 5, pr: 5 }}
                            onSubmit={onSubmit}
                        >
                            <TextField
                                name="names"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Nombres"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="lastNames"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Apellidos"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="email"
                                margin="normal"
                                type="email"
                                fullWidth
                                label="Correo"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="phoneNumber"
                                margin="normal"
                                type="tel"
                                fullWidth
                                label="Teléfono"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                onChange={setData}
                                sx={{ mt: 1.5, mb: 1.5 }}
                                required
                            />
                            <FormControlLabel
                                sx={{ mt: 1.5, mb: 1.5, ml: 1.5 }}
                                control={<Checkbox />}
                                label="Acepto términos y condiciones"
                                required
                            />
                            <Link to="/">
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 1.5, mb: 3, height: "4em" }}
                                >
                                    <Typography>Ingresar</Typography>
                                </Button>
                            </Link>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
