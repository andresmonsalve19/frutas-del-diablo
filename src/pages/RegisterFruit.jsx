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
import { NavBarInit } from "../components/common/NavBarInit";

export const RegisterFruit = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        type_l: "",
        color: "",
        power: "",
        consumer: "",
        description_short: "",
        description: "",
        url: ""
    })

    const setData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData)

        const requestOptions = { method: 'POST', headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}`, 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(userData) };
        fetch(`http://localhost:8000/api/fruits/`, requestOptions)
            .then(res => res.json())
        navigate("/")
        window.location.reload()
    }

    return (
        <>
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
                            <Box component="form" sx={{ pl: 5, pr: 5 }} onSubmit={onSubmit}>
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
                                    name="type_l"
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
                                    name="power"
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    label="Poder"
                                    onChange={setData}
                                    sx={{ mt: 2, mb: 1.5 }}
                                    required
                                />
                                <TextField
                                    name="consumer"
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    label="Consumidor"
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
                                <TextField
                                    name="description_short"
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    label="Descripción corta"
                                    onChange={setData}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                    required
                                />
                                <TextField
                                    name="url"
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    label="URL imagen"
                                    onChange={setData}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                    required
                                />
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 1.5, mb: 1.5, height: "4em" }}
                                >
                                    Registrar
                                </Button>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 1.5, mb: 1.5, height: "4em" }}
                                    onClick={() => navigate("/")}
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
