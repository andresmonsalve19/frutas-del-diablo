import { HomeLayoutInit } from "./HomeLayoutInit";
import Grid from '@mui/material/Grid';
import { BsHeart, BsArrowLeftCircle } from "react-icons/bs";

export const FruitPage = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var name = urlParams.get('name')
    var color = urlParams.get('color')
    var power = urlParams.get('power')
    var eater = urlParams.get('eater')
    var type = urlParams.get('type')
    var image = urlParams.get('image')
    var id = urlParams.get('id')
    var description_fruit = urlParams.get('description_fruit')

    image += `&id=${id}`

    return (
        <>
            <HomeLayoutInit />
            <Grid container direction="row" justifyContent="center" style={{ backgroundColor: "black", maxHeight: "1000px", color: "white" }}>
                <Grid container xs={7} style={{ backgroundColor: "#1e1e1e" }}>
                    <Grid container direction="row" justifyContent="center" style={{ marginTop: "40px" }}>
                        <Grid xs={9} style={{ fontSize: "30px" }}>
                            <BsArrowLeftCircle />
                        </Grid>
                        <Grid xs={0} style={{ fontSize: "30px" }}>
                            <BsHeart />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center">
                        <Grid xs={0} style={{ fontSize: "30px", marginTop: "0px" }}>
                            <b>Nombre:</b> {name}
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" style={{ marginTop: "30px" }}>
                        <Grid xs={3.6} style={{ borderRight: "1px solid", borderColor: "white" }}>
                            <img src={image} width="300px" height="200px" />
                        </Grid>
                        <Grid xs={2.8}>
                            <Grid container direction="row" justifyContent="center" style={{ fontSize: "20px", borderBottom: "1px solid", borderColor: "white", marginTop: "14px", marginLeft: "20px" }}>
                                <Grid xs={0}>
                                    <b>Tipo:</b> {type}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" style={{ fontSize: "20px", borderBottom: "1px solid", borderColor: "white", marginTop: "14px", marginLeft: "20px" }}>
                                <Grid xs={0} style={{ fontSize: "20px" }}>
                                    <b>Color:</b> {color}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" style={{ fontSize: "20px", borderBottom: "1px solid", borderColor: "white", marginTop: "14px", marginLeft: "20px" }}>
                                <Grid xs={0} style={{ fontSize: "20px" }}>
                                    <b>Poder:</b> {power}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" style={{ fontSize: "20px", marginTop: "14px", marginLeft: "20px" }}>
                                <Grid xs={0} style={{ fontSize: "20px" }}>
                                    <b>Consumidor:</b> {eater}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" >
                        <Grid xs={0} style={{ padding: "40px", paddingLeft: "100px", paddingRight: "100px", fontSize: "16px" }}>
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
                            <p style={{ height: "100px" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}