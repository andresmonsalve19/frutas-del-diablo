import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { BsHeart, BsArrowLeftCircle } from "react-icons/bs";

export const UpperBar = () => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            style={{ marginTop: "40px" }}
        >
            <Grid item xs={9} style={{ fontSize: "30px" }}>
                <Link to="/">
                    <BsArrowLeftCircle color="white" />
                </Link>
            </Grid>
            <Grid item xs={0} style={{ fontSize: "30px" }}>
                <BsHeart />
            </Grid>
        </Grid>
    );
};
