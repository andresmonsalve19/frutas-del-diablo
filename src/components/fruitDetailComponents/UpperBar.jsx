import { Box, Checkbox, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { BsHeart, BsArrowLeftCircle, BsPencilSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const UpperBar = ({ id }) => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            sx={{ mt: 1, height: 70 }}
        >
            <Grid
                item
                xs={8}
                sm={9}
                style={{ fontSize: "30px", paddingLeft: "20px" }}
            >
                <Link to="/">
                    <motion.p whileHover={{ scale: 0.99 }}>
                        <BsArrowLeftCircle color="white" />
                    </motion.p>
                </Link>
            </Grid>

            <Grid
                item
                xs={2}
                sm={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 30,
                }}
            >
                <motion.p whileHover={{ scale: 0.9 }}>
                    <Link to={`/editar-fruta/${id}`}>
                        <BsPencilSquare color="white" />
                    </Link>
                </motion.p>
            </Grid>
            <Grid
                item
                xs={2}
                sm={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 30,
                }}
            >
                <motion.p whileHover={{ scale: 0.9 }}>
                    <Checkbox
                        sx={{
                            "& .MuiSvgIcon-root": { fontSize: 32, mb: 1 },
                        }}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                    />
                </motion.p>
            </Grid>
        </Grid>
    );
};
