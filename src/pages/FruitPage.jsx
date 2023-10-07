import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { BsHeart, BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const FruitPage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var name = urlParams.get("name");
    var color = urlParams.get("color");
    var power = urlParams.get("power");
    var eater = urlParams.get("eater");
    var type = urlParams.get("type");
    var image = urlParams.get("image");
    var id = urlParams.get("id");
    var description_fruit = urlParams.get("description_fruit");

    image += `&id=${id}`;

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                sx={{
                    backgroundColor: "black",
                    maxHeight: "1000px",
                    color: "white",
                    p: 1,
                }}
            >
                <Grid
                    item
                    container
                    xs={7}
                    style={{ backgroundColor: "#1e1e1e" }}
                >
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        style={{ marginTop: "40px" }}
                    >
                        <Grid item xs={9} style={{ fontSize: "30px" }}>
                            <Link to="/" >
                                <BsArrowLeftCircle color="white" />
                            </Link>
                        </Grid>

                        <Grid item xs={0} style={{ fontSize: "30px" }}>
                            <BsHeart />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={0}
                            style={{ fontSize: "30px", marginTop: "0px" }}
                        >
                            <b>Nombre:</b> {name}
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="center"
                        style={{ marginTop: "30px" }}
                    >
                        <Grid
                            item
                            xs={3.6}
                            style={{
                                borderRight: "1px solid",
                                borderColor: "white",
                            }}
                        >
                            <img src={image} width="300px" height="200px" />
                        </Grid>
                        <Grid item container xs={2.8}>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="center"
                                style={{
                                    fontSize: "20px",
                                    borderBottom: "1px solid",
                                    borderColor: "white",
                                    marginTop: "14px",
                                    marginLeft: "20px",
                                }}
                            >
                                <Grid item xs={0}>
                                    <b>Tipo:</b> {type}
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                style={{
                                    fontSize: "20px",
                                    borderBottom: "1px solid",
                                    borderColor: "white",
                                    marginTop: "14px",
                                    marginLeft: "20px",
                                }}
                            >
                                <Grid item xs={0} style={{ fontSize: "20px" }}>
                                    <b>Color:</b> {color}
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                style={{
                                    fontSize: "20px",
                                    borderBottom: "1px solid",
                                    borderColor: "white",
                                    marginTop: "14px",
                                    marginLeft: "20px",
                                }}
                            >
                                <Grid item xs={0} style={{ fontSize: "20px" }}>
                                    <b>Poder:</b> {power}
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                style={{
                                    fontSize: "20px",
                                    marginTop: "14px",
                                    marginLeft: "20px",
                                }}
                            >
                                <Grid item xs={0} style={{ fontSize: "20px" }}>
                                    <b>Consumidor:</b> {eater}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        sx={{ mb: 6 }}
                    >
                        <Grid
                            item
                            xs={0}
                            style={{
                                padding: "40px",
                                paddingLeft: "100px",
                                paddingRight: "100px",
                                fontSize: "16px",
                            }}
                        >
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                            {description_fruit}
                        </Grid>
                        <Grid item>
                            <Link to="/historial">
                                <Typography
                                    variant="overline"
                                    sx={{ color: "#C0CAC4" }}
                                >
                                    Ver historial de versiones
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
