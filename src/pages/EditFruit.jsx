import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { PageTitle } from "../components";
import { fruitDetails } from "../Data";
import { useParams } from "react-router-dom";

export const EditFruit = () => {
    const { fruitId } = useParams();
    const currentFruit = fruitDetails.find(
        (fruit) => fruit.id.toString() === fruitId
    );
    const { id, name, type, color, power, eater, description_fruit } = currentFruit;

    return (
        <>
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
                            <PageTitle
                                sx={{
                                    mt: 1,
                                    mb: 1,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                                title={`Editar Fruta ${id}`}
                                variant="h4"
                            />
                            <Box component="form">
                                <TextField
                                    name="nombre"
                                    type="text"
                                    fullWidth
                                    label="Nombre"
                                    placeholder={name}
                                    sx={{ mt: 2, mb: 1.5 }}
                                />
                                <TextField
                                    name="Tipo"
                                    type="text"
                                    fullWidth
                                    label="Tipo"
                                    placeholder={type}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                />
                                <TextField
                                    name="Color"
                                    type="text"
                                    fullWidth
                                    label="Color"
                                    placeholder={color}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                />
                                <TextField
                                    name="Poder"
                                    type="text"
                                    fullWidth
                                    label="Poder"
                                    placeholder={power}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                />
                                <TextField
                                    name="Consumidor"
                                    type="text"
                                    fullWidth
                                    label="Consumidor"
                                    placeholder={eater}
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                />
                                <TextField
                                    name="Descripcion"
                                    type="text"
                                    fullWidth
                                    label="Descripción"
                                    placeholder={description_fruit}
                                    multiline
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                />
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 1.5, mb: 3, height: "4em" }}
                                >
                                    <Typography>Guardar</Typography>
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
