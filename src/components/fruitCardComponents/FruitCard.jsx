import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const FruitCard = ({ json }) => {
    const { id, name, description_short, description, type_l, color, power, consumer} = json;
    const fruitimage_set = json["fruitimage_set"][0]["image"]

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
                    image={fruitimage_set}
                    title="Fruit"
                />
                <CardContent>
                    <Typography style={{ fontSize: "20px" }}>{name}</Typography>
                    <Typography style={{ fontSize: "12px", marginTop: "16px" }}>
                        {description_short}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        sx={{ height: 70 }}
                        id="card_creator_container"
                    >
                        <Grid item sx={{ ml: 2, mb: 0, mt: 2 }}>
                            <motion.h1 whileHover={{ scale: 0.9 }}>
                                <Typography
                                    style={{
                                        fontSize: "22px",
                                        marginTop: "22px",
                                    }}
                                >
                                    <BsHeart />
                                </Typography>
                            </motion.h1>
                        </Grid>
                        <Grid item sx={{ mr: 2, mb: 0, mt: 2 }}>
                            <motion.h1 whileHover={{ scale: 0.9 }}>
                                <Link key={id} to={`/fruta?id=${json.id}&name=${name}&description=${description}&type_l=${type_l}&color=${color}&power=${power}&consumer=${consumer}&image=${fruitimage_set}`}>
                                    <Typography
                                        style={{
                                            fontSize: "22px",
                                            marginTop: "22px",
                                            color: "white"
                                        }}
                                    >
                                        <BsPlusCircle />
                                    </Typography>
                                </Link>
                            </motion.h1>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};
