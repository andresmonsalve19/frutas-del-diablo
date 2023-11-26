import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useState, useEffect, useContext } from "react";

export const SignIn = () => {
    const navigate = useNavigate()
    const { setIsAuth } = useContext(DataContext)
    const [doneRequest, setDoneRequest] = useState(false)
    const [response, setResponse] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const dataLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (doneRequest) {
            if (response["access_token"] != undefined) {
                localStorage.setItem("access_token", response["access_token"]);
                localStorage.setItem("session", true)
                localStorage.setItem("id", response["user"]["pk"])
                setIsAuth(true)
                navigate("/")
                location.reload()
            } else {
                alert("Usuario o contraseña incorrecto")
            }
        }
    }, [response, doneRequest])

    const onSubmit = (e) => {
        e.preventDefault();
        let username = loginData["username"]
        let password = loginData["password"]

        let awo = JSON.stringify({ "username": username, "password": password })

        const requestOptions = { method: 'POST', body: awo, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        fetch(`http://localhost:8000/api/accounts/login/`, requestOptions)
            .then(res => res.json())
            .then(res => setResponse(res))
            .then(() => setDoneRequest(true))
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
                                label="Usuario"
                                onChange={dataLogin}
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Contraseña"
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
