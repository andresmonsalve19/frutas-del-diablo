import { Box, Grid } from "@mui/material";

export const FruitResume = ({fruit}) => {
    console.log(fruit)
    const { image, type, color, power, eater } = fruit;

    return (
        <Grid
            container
            item
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "30px" }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                    borderColor: "white",
                    textAlign: "center",
                }}
            >
                <img src={image} width="300px" height="200px"/>
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
    );
};
