import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { FavoriteFruitIcon } from "./FavoriteFruitIcon";

export const FruitCard = ({ json }) => {
    const {isAuth} = useContext(DataContext)
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
                    <Typography
                        style={{
                            fontSize: "12px",
                            marginTop: "16px",
                            height: 70,
                        }}
                    >
                        {description_card}
                    </Typography>
                    <Grid
                        container
                        flexDirection="row"
                        alignItems="center"
                        alignContent="center"
                        justifyContent={isAuth ? "space-between" : "center"}
                        sx={{ height: 40, mt: 2 }}
                        id="card_creator_container"
                    >
                            {
                                isAuth
                                ?   <FavoriteFruitIcon fruit={json} />
                                : undefined
                            }
                        <Grid item>
                            <motion.h1 whileHover={{ scale: 0.9 }}>
                                <Link key={id} to={`/fruta/${json.id}`} title="Ver más información de esta fruta">
                                    <BsPlusCircle
                                        style={{
                                            fontSize: 22,
                                            color: "white",
                                            marginRight: 8,
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
