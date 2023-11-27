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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const SignUp = () => {

    const navigate = useNavigate();
    const { setIsAuth } = useContext(DataContext)
    const [doneRequest, setDoneRequest] = useState(false)
    const [response, setResponse] = useState(false)
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password1: "",
        description: "",
        photo_url: ""
    });

    const setData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsAuth(true)
        userData["password2"] = userData["password1"]
        const userinstance = { "photo_url": userData["photo_url"], "description": userData["description"] }
        userData["userinstance"] = userinstance

        delete userData["photo_url"]
        delete userData["description"]

        const requestOptions = { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(userData) };
        fetch(`http://127.0.0.1:8000/api/accounts/signup/`, requestOptions)
            .then(res => res.json())
            .then(setDoneRequest(true))
            .then(res => setResponse(res))
            
    };

    useEffect(() => {
        if (doneRequest) {
            console.log(response)
            if (response["access_token"] !== undefined) {
                window.alert("El usuario fue creado")
                navigate("/iniciar-sesion")
            } else {
                window.alert("El usuario no fue creado")
            }
        }
    }, [response])

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
                                name="first_name"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Nombres"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="last_name"
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
                                name="username"
                                margin="normal"
                                type="tel"
                                fullWidth
                                label="Usuario"
                                onChange={setData}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="password1"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Contraseña"
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
                                name="photo_url"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="URL imagen"
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
