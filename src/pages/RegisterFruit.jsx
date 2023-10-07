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
import { useNavigate } from "react-router-dom";
import { NavBarInit } from "../common/NavBarInit";

export const navBarInit = () => {
    return (
        <>
        <NavBarInit />
        <Outlet />
        </>
    )
}

export const RegisterFruit = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        names: "",
        types: "",
        colors: "",
        powerups: "",
        owners: "",
        descriptions: ""
    })

    const setData = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
    }

    return (
        <>
        <NavBarInit>
        </NavBarInit>

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
                            Registrar Fruta
                        </Typography>
                        <Box component="form" sx={{pl:5, pr:5}} onSubmit={onSubmit}>
                            <TextField
                                name="name"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Nombre"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="type"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Tipo"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="color"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Color"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="powerup"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Poder"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="owner"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Portador"
                                onChange={setData}
                                sx={{ mt: 1.5, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="description"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Descripción"
                                onChange={setData}
                                sx={{ mt: 1.5, mb: 1.5 }}
                                required
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 1.5, height: "4em" }}
                                onClick={() => navigate("/home")}
                            >
                                Registrar
                            </Button>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 1.5, height: "4em" }}
                                onClick={() => navigate("/home")}
                            >
                                Volver
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};
