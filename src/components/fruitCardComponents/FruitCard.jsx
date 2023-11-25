import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Checkbox,
} from "@mui/material";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const FruitCard = ({ json }) => {
    const { id, name, image, description_card } = json;
    return (
        <>
            <Card
                className="fruit_card"
                sx={{
                    width: {
                        xs: 250,
                    },
                    mb: 8,
                    borderRadius: 2,
                }}
            >
                <CardMedia
                    className="fruit_card"
                    sx={{
                        height: {
                            xs: 200,
                        },
                    }}
                    image={image}
                    title="Fruit"
                />
                <CardContent>
                    <Typography style={{ fontSize: "20px" }}>{name}</Typography>
                    <Typography style={{ fontSize: "12px", marginTop: "16px", height: 70 }}>
                        {description_card}
                    </Typography>
                    <Grid
                        container
                        flexDirection="row"
                        alignItems="flex-end"
                        alignContent="center"
                        justifyContent="space-between"
                        sx={{ height: 40, mt: 2}}
                        id="card_creator_container"
                    >
                        <Grid item>
                            <motion.h1 whileHover={{ scale: 0.9 }}>
                                <Checkbox
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 25 },
                                    }}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                />
                            </motion.h1>
                        </Grid>
                        <Grid item>
                            <motion.h1 whileHover={{ scale: 0.9 }}>
                                <Link key={id} to={`/fruta/${json.id}`}>
                                    <BsPlusCircle
                                        style={{
                                            fontSize: 22,
                                            color: "white",
                                            marginRight: 8
                                        }}
                                    />
                                </Link>
                            </motion.h1>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};
